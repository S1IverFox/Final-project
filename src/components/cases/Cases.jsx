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
    this.refreshList = this.refreshList.bind(this);
  }

  componentDidMount() {
    this.refreshList();
    this.getOfficers();
  }

  refreshList() {
    CaseFetches.getAllCases().then((data) => {
      this.setState({ casess: data });
    });
  }

  deleteCase(casesid) {
    if (confirm('Are you sure?')) {
      CaseFetches.deleteCase(casesid)
        .then((response) => {
          if (response.ok) {
            alert('succsess');
            this.refreshList();
          } else {
            alert('can not delete case with id:' + casesid);
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
    } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let infoModalClose = () => this.setState({ infoModalShow: false });

    return (
      <div>
        <h3>Cases</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>License number</th>
              <th>Full Name</th>
              <th>Status</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {casess.map((caseItem) => (
              <tr key={caseItem._id}>
                {/* {console.log(caseItem)} */}
                <td>{caseItem.licenseNumber}</td>
                <td>{caseItem.ownerFullName}</td>
                <td>{Converters.toReadableStatus(caseItem.status)}</td>
                <td>
                  <ButtonToolbar>
                    <Button onClick={() => this.deleteCase(caseItem._id)}>
                      Delete
                    </Button>

                    <Button
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
                        });
                      }}
                    >
                      Info
                    </Button>
                  </ButtonToolbar>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ButtonToolbar>
          <Button onClick={() => this.setState({ addModalShow: true })}>
            Add case
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
        />
      </div>
    );
  }
}

export default Cases;
