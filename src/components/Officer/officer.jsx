import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { ButtonToolbar, Button, Form } from 'react-bootstrap';
import AddOf from './AddOfficers.jsx';
// import EditOfficers from './EditOfficers.jsx';
import Info from './InfoOfficers.jsx';

class Officer extends Component {
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
    if (confirm('Are you sure?')) {
      fetch('http://84.201.129.203:8888/api/officers/' + officerid, {
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
            alert('can not delete officer with id:' + officerid);
          }
        })
        .catch((err) => console.log(err));
    }
  }

  updateApproveStatus(officer) {
    const officerid = officer._id;
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHByb3ZlZCI6dHJ1ZSwiX2lkIjoiNWZhYWNkODUwYmQ3NTkwMDExZjNhODk3IiwiZW1haWwiOiJlbHphLnNoYXJAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoi0K3Qu9GM0LfQsCIsImxhc3ROYW1lIjoi0KjQsNGA0LDRhNGD0YLQtNC40L3QvtCy0LAiLCJjbGllbnRJZCI6ImE5NDMyYmJlNzM2NDVjMTgyNWE0YzQyNmRiNTlmNDdkIiwiX192IjowLCJpYXQiOjE2MDU5NDg4NDR9.QuzvIbYiGxAIu8y4UtyKMYvdcuHXnXmJJHmXWmjTOMI';
    fetch('http://84.201.129.203:8888/api/officers/' + officerid, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        approved: !officer.approved,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        this.refreshList();
        alert('succses');
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
        <h3>Officers</h3>
        <Table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Approved</th>
              <th></th>
              <th>Option</th>
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
                </td>
                <td>
                  {officer.approved ? (
                    <Button onClick={() => this.updateApproveStatus(officer)}>
                      Unapprove
                    </Button>
                  ) : (
                    <Button onClick={() => this.updateApproveStatus(officer)}>
                      Approve
                    </Button>
                  )}
                </td>
                <td>
                  <ButtonToolbar>
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

export default Officer;
