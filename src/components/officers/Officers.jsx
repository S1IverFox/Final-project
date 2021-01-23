import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
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
      <div
        style={{
          backgroundColor: '#fff3e1e7',
          padding: '50px',
          borderRadius: '5px',
        }}
      >
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
                  <ButtonToolbar
                    style={{ marginLeft: '1rem', display: 'inline' }}
                  >
                    {officer.approved ? (
                      <Button
                        variant="outline-primary"
                        onClick={() => this.updateApproveStatus(officer)}
                      >
                        Снять одобрение
                      </Button>
                    ) : (
                      <Button
                        variant="outline-primary"
                        onClick={() => this.updateApproveStatus(officer)}
                      >
                        Одобрить
                      </Button>
                    )}
                  </ButtonToolbar>
                </td>
                <td>
                  <ButtonToolbar style={{ justifyContent: 'center' }}>
                    <Button
                      style={{ margin: '5px' }}
                      variant="outline-info"
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
                    <Button
                      style={{ margin: '5px' }}
                      variant="outline-danger"
                      onClick={() => this.deleteOfficer(officer._id)}
                    >
                      Удалить
                    </Button>
                  </ButtonToolbar>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ButtonToolbar>
          <Button
            variant="outline-success"
            onClick={() => this.setState({ addModalShow: true })}
          >
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
