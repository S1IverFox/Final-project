import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { ButtonToolbar, Button } from 'react-bootstrap';
import AddOf from './AddOfficers.jsx';
import EditOfficers from './EditOfficers.jsx';
import Info from './InfoOfficers.jsx';

class Officer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      officers: [],
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

  deleteOfficer(officerid) {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHByb3ZlZCI6dHJ1ZSwiX2lkIjoiNWZhYWNkODUwYmQ3NTkwMDExZjNhODk3IiwiZW1haWwiOiJlbHphLnNoYXJAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoi0K3Qu9GM0LfQsCIsImxhc3ROYW1lIjoi0KjQsNGA0LDRhNGD0YLQtNC40L3QvtCy0LAiLCJjbGllbnRJZCI6ImE5NDMyYmJlNzM2NDVjMTgyNWE0YzQyNmRiNTlmNDdkIiwiX192IjowLCJpYXQiOjE2MDU5NDg4NDR9.QuzvIbYiGxAIu8y4UtyKMYvdcuHXnXmJJHmXWmjTOMI';
    if (window.confirm('Are you sure?')) {
      fetch('http://84.201.129.203:8888/api/officers/' + officerid, {
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
    if (this.officers == this.setState) {
      this.refreshList();
    }
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
    let editModalClose = () => this.setState({ editModalShow: false });
    let infoModalClose = () => this.setState({ infoModalShow: false });

    return (
      <div>
        <h3>Officers</h3>
        <Table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {officers.map((officer) => (
              <tr key={officer._id}>
                <td>{officer.firstName}</td>
                <td>{officer.lastName}</td>
                <td>
                  <ButtonToolbar>
                    <Button
                      onClick={() =>
                        this.setState({
                          editModalShow: true,
                          officerid: officer._id,
                          officeremail: officer.email,
                          officerfirstname: officer.firstName,
                          officerlastname: officer.lastName,
                          officerpassword: officer.password,
                          officerapproved: officer.approved,
                        })
                      }
                    >
                      Edit
                    </Button>

                    <EditOfficers
                      show={this.state.editModalShow}
                      onHide={editModalClose}
                      officerid={officerid}
                      officeremail={officeremail}
                      officerfirstname={officerfirstname}
                      officerlastname={officerlastname}
                      officerpassword={officerpassword}
                      officerapproved={officerapproved}
                    />

                    <Button onClick={() => this.deleteOfficer(officer._id)}>
                      Delete
                    </Button>

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
                      Info
                    </Button>
                    <Info
                      show={this.state.infoModalShow}
                      onHide={infoModalClose}
                      officerid={officerid}
                      officeremail={officeremail}
                      officerfirstname={officerfirstname}
                      officerlastname={officerlastname}
                      // officerapproved={officerapproved}
                    />
                  </ButtonToolbar>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ButtonToolbar>
          <Button onClick={() => this.setState({ addModalShow: true })}>
            Add officer
          </Button>
          <AddOf show={this.state.addModalShow} onHide={addModalClose} />
        </ButtonToolbar>
      </div>
    );
  }
}

export default Officer;
