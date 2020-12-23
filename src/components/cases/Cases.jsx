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
      addModalShow: false,
      editModalShow: false,
      infoModalShow: false,
    };
  }

  componentDidMount() {
    this.refreshList();
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

  deleteOfficer(casesid) {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHByb3ZlZCI6dHJ1ZSwiX2lkIjoiNWZhYWNkODUwYmQ3NTkwMDExZjNhODk3IiwiZW1haWwiOiJlbHphLnNoYXJAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoi0K3Qu9GM0LfQsCIsImxhc3ROYW1lIjoi0KjQsNGA0LDRhNGD0YLQtNC40L3QvtCy0LAiLCJjbGllbnRJZCI6ImE5NDMyYmJlNzM2NDVjMTgyNWE0YzQyNmRiNTlmNDdkIiwiX192IjowLCJpYXQiOjE2MDU5NDg4NDR9.QuzvIbYiGxAIu8y4UtyKMYvdcuHXnXmJJHmXWmjTOMI';
    if (window.confirm('Are you sure?')) {
      fetch('http://84.201.129.203:8888/api/cases/' + casesid, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
    }
  }

  componentDidUpdate() {
    if (this.casess == this.setState) {
      this.refreshList();
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
      casesresolution,
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
            {casess.map((cases) => (
              <tr key={cases._id}>
                <td>{cases.licenseNumber}</td>
                <td>{cases.ownerFullName}</td>
                <td>{cases.status}</td>
                <td>
                  <ButtonToolbar>
                    <Button
                      onClick={() =>
                        this.setState({
                          editModalShow: true,
                          casesid: cases._id,
                          casesownerfullname: cases.ownerFullName,
                          caseslicensenumber: cases.licenseNumber,
                          casescolor: cases.color,
                          casescreatedat: cases.createdAt,
                          casesstatus: cases.status,
                        })
                      }
                    >
                      Edit
                    </Button>

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
                    />

                    <Button onClick={() => this.deleteOfficer(cases._id)}>
                      Delete
                    </Button>

                    <Button
                      onClick={() =>
                        this.setState({
                          infoModalShow: true,
                          casesid: cases._id,
                          casesownerfullname: cases.ownerFullName,
                          caseslicensenumber: cases.licenseNumber,
                          casescolor: cases.color,
                          casescreatedat: cases.createdAt,
                          casesstatus: cases.status,
                          casesresolution: cases.resolution,
                        })
                      }
                    >
                      Info
                    </Button>
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
                    />
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
          <AddCases show={this.state.addModalShow} onHide={addModalClose} />
        </ButtonToolbar>
      </div>
    );
  }
}

export default Cases;
