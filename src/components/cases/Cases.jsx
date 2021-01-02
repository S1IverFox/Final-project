import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { ButtonToolbar, Button } from 'react-bootstrap';
import AddCases from './AddCases.jsx';
import EditCases from './EditCases.jsx';
import Info from './InfoCases.jsx';

class Cases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      casess: [],
      officers: [],
      officername: 'No officer',
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
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHByb3ZlZCI6dHJ1ZSwiX2lkIjoiNWZhYWNkODUwYmQ3NTkwMDExZjNhODk3IiwiZW1haWwiOiJlbHphLnNoYXJAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoi0K3Qu9GM0LfQsCIsImxhc3ROYW1lIjoi0KjQsNGA0LDRhNGD0YLQtNC40L3QvtCy0LAiLCJjbGllbnRJZCI6ImE5NDMyYmJlNzM2NDVjMTgyNWE0YzQyNmRiNTlmNDdkIiwiX192IjowLCJpYXQiOjE2MDU5NDg4NDR9.QuzvIbYiGxAIu8y4UtyKMYvdcuHXnXmJJHmXWmjTOMI';
    fetch('http://84.201.129.203:8888/api/cases', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ casess: data });
      });
  }

  deleteCase(casesid) {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHByb3ZlZCI6dHJ1ZSwiX2lkIjoiNWZhYWNkODUwYmQ3NTkwMDExZjNhODk3IiwiZW1haWwiOiJlbHphLnNoYXJAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoi0K3Qu9GM0LfQsCIsImxhc3ROYW1lIjoi0KjQsNGA0LDRhNGD0YLQtNC40L3QvtCy0LAiLCJjbGllbnRJZCI6ImE5NDMyYmJlNzM2NDVjMTgyNWE0YzQyNmRiNTlmNDdkIiwiX192IjowLCJpYXQiOjE2MDU5NDg4NDR9.QuzvIbYiGxAIu8y4UtyKMYvdcuHXnXmJJHmXWmjTOMI';
    if (confirm('Are you sure?')) {
      fetch('http://84.201.129.203:8888/api/cases/' + casesid, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            alert('succsess');
            this.refreshList();
          } else {
            alert('can not delete case with id:' + officerid);
          }
        })
        .catch((err) => console.log(err));
    }
  }

  renderStatus(status) {
    switch (status) {
      case 'new':
        return 'New';
      case 'in_progress':
        return 'In progress';
      case 'done':
        return 'Done';
      default:
        return 'Unknown status';
    }
  }

  getOfficers() {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHByb3ZlZCI6dHJ1ZSwiX2lkIjoiNWZhYWNkODUwYmQ3NTkwMDExZjNhODk3IiwiZW1haWwiOiJlbHphLnNoYXJAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoi0K3Qu9GM0LfQsCIsImxhc3ROYW1lIjoi0KjQsNGA0LDRhNGD0YLQtNC40L3QvtCy0LAiLCJjbGllbnRJZCI6ImE5NDMyYmJlNzM2NDVjMTgyNWE0YzQyNmRiNTlmNDdkIiwiX192IjowLCJpYXQiOjE2MDU5NDg4NDR9.QuzvIbYiGxAIu8y4UtyKMYvdcuHXnXmJJHmXWmjTOMI';
    fetch('http://84.201.129.203:8888/api/officers', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ officers: data });
      });
  }

  getOfficer(officerId) {
    if (officerId != undefined) {
      // const token = localStorage.token;
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHByb3ZlZCI6dHJ1ZSwiX2lkIjoiNWZhYWNkODUwYmQ3NTkwMDExZjNhODk3IiwiZW1haWwiOiJlbHphLnNoYXJAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoi0K3Qu9GM0LfQsCIsImxhc3ROYW1lIjoi0KjQsNGA0LDRhNGD0YLQtNC40L3QvtCy0LAiLCJjbGllbnRJZCI6ImE5NDMyYmJlNzM2NDVjMTgyNWE0YzQyNmRiNTlmNDdkIiwiX192IjowLCJpYXQiOjE2MDU5NDg4NDR9.QuzvIbYiGxAIu8y4UtyKMYvdcuHXnXmJJHmXWmjTOMI';
      return fetch('http://84.201.129.203:8888/api/officers/' + officerId, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.setState({ officername: data.firstName });
        });
    } else {
      this.setState({ officername: 'No officer' });
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
      casesofficer,
      casestype,
      officers,
      officername,
    } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });
    let infoModalClose = () => this.setState({ infoModalShow: false });

    return (
      <div>
        <h3>Cases</h3>
        <Table>
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
                <td>{this.renderStatus(caseItem.status)}</td>
                <td>
                  <ButtonToolbar>
                    <Button
                      onClick={() =>
                        this.setState({
                          editModalShow: true,
                          casesid: caseItem._id,
                          casesownerfullname: caseItem.ownerFullName,
                          caseslicensenumber: caseItem.licenseNumber,
                          casescolor: caseItem.color,
                          casescreatedat: caseItem.createdAt,
                          casesupdatedat: caseItem.updateAt,
                          casesdate: caseItem.date,
                          casesstatus: caseItem.status,
                          casesdescription: caseItem.description,
                          casesofficer: caseItem.officer,
                          casestype: caseItem.type,
                        })
                      }
                    >
                      Edit
                    </Button>

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
        <EditCases
          show={this.state.editModalShow}
          onHide={editModalClose}
          casesid={casesid}
          caseslicensenumber={caseslicensenumber}
          casesownerfullname={casesownerfullname}
          casescolor={casescolor}
          casescreatedat={casescreatedat}
          casesstatus={casesstatus}
          casesresolution={casesresolution}
          refresh={this.refreshList}
          officers={officers}
          casesdescription={casesdescription}
          casesofficer={casesofficer}
          casestype={casestype}
        />
        <Info
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
        />
      </div>
    );
  }
}

export default Cases;
