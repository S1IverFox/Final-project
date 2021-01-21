import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { ButtonToolbar, Button, Spinner } from 'react-bootstrap';
import AddCases from './AddCases.jsx';
import InfoCases from './InfoCases.jsx';
import Converters from './Converters.jsx';
import CaseFetches from '../../fetches/CaseFetches.jsx';
import OfficerFetches from '../../fetches/OfficerFetches.jsx';

class Cases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      casess: [],
      officers: [],
      officername: <Spinner animation="border" />,
      addModalShow: false,
      editModalShow: false,
      infoModalShow: false,
    };
  }

  componentDidMount() {
    this.refreshList();
    this.getOfficers();
  }

  refreshList = () => {
    CaseFetches.getAllCases().then((data) => {
      this.setState({ casess: data });
    });
  };

  deleteCase(casesid) {
    if (confirm('Вы уверены?')) {
      CaseFetches.deleteCase(casesid)
        .then((response) => {
          if (response.ok) {
            alert('Заявление удалено!');
            this.refreshList();
          } else {
            alert('Невозможно удалить заявление с таким ID:' + casesid);
          }
        })
        .catch((err) => console.log(err));
    }
  }

  getOfficers() {
    OfficerFetches.getAllOfficers().then((data) => {
      this.setState({ officers: data });
    });
  }

  getOfficer(officerId) {
    this.setState({ officername: <Spinner animation="border" /> });
    if (officerId != undefined) {
      OfficerFetches.getOfficer(officerId)
        .then((data) => {
          this.setState({ officername: <span>{data.firstName}</span> });
        })
        .catch((error) =>
          this.setState({
            officername: <span>{`${error} id:${officerId}`}</span>,
          })
        );
    } else {
      this.setState({ officername: <span>No officer</span> });
    }
  }

  render() {
    const {
      casess,
      casesid,
      caseslicensenumber,
      casescolor,
      casesownerfullname,
      casesstatus,
      casescreatedat,
      casesupdatedat,
      casesdate,
      casesresolution,
      casesdescription,
      casestype,
      officers,
      officername,
      casesofficer,
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
        <h3>Украденные велосипеды</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Лицензионный номер</th>
              <th>Имя владельца</th>
              <th>Цвет велосипеда</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {casess.map((caseItem) => (
              <tr key={caseItem._id}>
                <td>{caseItem.licenseNumber}</td>
                <td>{caseItem.ownerFullName}</td>
                <td>{caseItem.color}</td>
                <td>{Converters.toReadableStatus(caseItem.status)}</td>
                <td>
                  <ButtonToolbar style={{ justifyContent: 'center' }}>
                    <Button
                      style={{ margin: '5px' }}
                      variant="outline-info"
                      onClick={() => {
                        this.getOfficer(caseItem.officer);
                        this.setState({
                          infoModalShow: true,
                          casesid: caseItem._id,
                          casesownerfullname: caseItem.ownerFullName,
                          caseslicensenumber: caseItem.licenseNumber,
                          casescolor: caseItem.color,
                          casescreatedat: caseItem.createdAt,
                          casesupdatedat: caseItem.updateAt,
                          casesdate: caseItem.date,
                          casesstatus: caseItem.status,
                          casesresolution: caseItem.resolution,
                          casesdescription: caseItem.description,
                          casestype: caseItem.type,
                          casesofficer: caseItem.officer,
                        });
                      }}
                    >
                      Подробная информация
                    </Button>
                    <Button
                      style={{ margin: '5px' }}
                      onClick={() => this.deleteCase(caseItem._id)}
                      variant="outline-danger"
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
            onClick={() => this.setState({ addModalShow: true })}
            variant="outline-danger"
          >
            Сообщить о краже
          </Button>
        </ButtonToolbar>
        <AddCases
          show={this.state.addModalShow}
          refresh={this.refreshList}
          onHide={addModalClose}
          officers={officers}
        />
        <InfoCases
          show={this.state.infoModalShow}
          onHide={infoModalClose}
          casesid={casesid}
          caseslicensenumber={caseslicensenumber}
          casesownerfullname={casesownerfullname}
          casescolor={casescolor}
          casescreatedat={casescreatedat}
          casesstatus={casesstatus}
          casesresolution={casesresolution}
          casesdescription={casesdescription}
          officername={officername}
          casestype={casestype}
          casesupdatedat={casesupdatedat}
          casesdate={casesdate}
          officers={officers}
          refresh={this.refreshList}
          casesofficer={casesofficer}
        />
      </div>
    );
  }
}

export default Cases;
