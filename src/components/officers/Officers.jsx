import React, { Component } from 'react';
import { Form, Table } from 'react-bootstrap';
import { ButtonToolbar, Button } from 'react-bootstrap';
import OfficerFetches from '../../fetches/OfficerFetches.jsx';
import AddOf from './AddOfficers.jsx';
import Info from './InfoOfficers.jsx';

class Officers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      officers: [],
      addModalShow: false,
      infoModalShow: false,
    };
    this.refreshList = this.refreshList.bind(this);
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    OfficerFetches.getAllOfficers()
      .then((data) => {
        this.setState({ officers: data });
      })
      .catch((err) => alert(err));
  }

  deleteOfficer(officerId) {
    if (confirm('Вы уверены?')) {
      OfficerFetches.deleteOfficer(officerId)
        .then((response) => {
          if (response.ok) {
            alert('Сотрудник удален');
            this.refreshList();
          } else {
            alert('Невозможно удалить сотрудника с таким ID:' + officerId);
          }
        })
        .catch((err) => console.log(err));
    }
  }

  updateApproveStatus(officer) {
    OfficerFetches.updateApproveStatus(officer).then(() => {
      this.refreshList();
      alert('Одобрение изменено!');
    });
  }

  render() {
    const {
      officers,
      officerid,
      officeremail,
      officerfirstname,
      officerlastname,
      officerpassword,
      officerapproved,
    } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let infoModalClose = () => this.setState({ infoModalShow: false });

    return (
      <div>
        <h3>Ответсвенные сотрудники</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>Одобрение</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {officers.map((officer) => (
              <tr key={officer._id}>
                <td>{officer.firstName}</td>
                <td>{officer.lastName}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={officer.approved}
                    disabled
                  ></input>
                  {officer.approved ? (
                    <Button onClick={() => this.updateApproveStatus(officer)}>
                      Снять одобрение
                    </Button>
                  ) : (
                    <Button onClick={() => this.updateApproveStatus(officer)}>
                      Одобрить
                    </Button>
                  )}
                </td>
                <td>
                  <ButtonToolbar>
                    <Button
                      onClick={() =>
                        this.setState({
                          infoModalShow: true,
                          officerid: officer._id,
                          officeremail: officer.email,
                          officerfirstname: officer.firstName,
                          officerlastname: officer.lastName,
                          officerpassword: officer.password,
                          officerapproved: officer.approved,
                        })
                      }
                    >
                      Подробная информация
                    </Button>
                    <Button onClick={() => this.deleteOfficer(officer._id)}>
                      Удалить
                    </Button>
                  </ButtonToolbar>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ButtonToolbar>
          <Button onClick={() => this.setState({ addModalShow: true })}>
            Добавить сотрудника
          </Button>
        </ButtonToolbar>
        <AddOf
          show={this.state.addModalShow}
          onHide={addModalClose}
          refresh={this.refreshList}
        />
        <Info
          show={this.state.infoModalShow}
          onHide={infoModalClose}
          officerid={officerid}
          officeremail={officeremail}
          officerfirstname={officerfirstname}
          officerlastname={officerlastname}
          officerpassword={officerpassword}
          officerapproved={officerapproved}
          refresh={this.refreshList}
        />
      </div>
    );
  }
}

export default Officers;
