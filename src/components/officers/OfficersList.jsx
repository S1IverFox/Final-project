import React, { Component } from 'react';
import Button from '../Buttons/Button.jsx';

class OfficersList extends Component {
  state = {
    officers: [],
  };

  componentDidMount() {
    this.refreshList();
    // const token =
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHByb3ZlZCI6dHJ1ZSwiX2lkIjoiNWZhYWNkODUwYmQ3NTkwMDExZjNhODk3IiwiZW1haWwiOiJlbHphLnNoYXJAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoi0K3Qu9GM0LfQsCIsImxhc3ROYW1lIjoi0KjQsNGA0LDRhNGD0YLQtNC40L3QvtCy0LAiLCJjbGllbnRJZCI6ImE5NDMyYmJlNzM2NDVjMTgyNWE0YzQyNmRiNTlmNDdkIiwiX192IjowLCJpYXQiOjE2MDU5NDg4NDR9.QuzvIbYiGxAIu8y4UtyKMYvdcuHXnXmJJHmXWmjTOMI';
    // fetch('http://84.201.129.203:8888/api/officers', {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //     Authorization: `Bearer ${token}`,
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((officers) => {
    //     this.setState({ officers });
    //   });
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

  deleteOfficer(_id) {
    // if (window.confirm('Are you sure?')) {
    fetch('http://localhost:8080/api/officers:' + _id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    // }
  }

  render() {
    const { officers } = this.state;
    return (
      <div>
        {/* <ul>
          {officers.map((officer) => (
            <li key={officer.email}>
              {officer.firstName} {officer.lastName}
              <Button btnText="Open" />
              <Button btnText="Edit" />
              <Button
                btnText="Delete"
                onClickBtn={this.deleteOfficer(officer, OfficerID)}
              />
            </li>
          ))}
        </ul> */}
        <table>
          <thead>
            <tr>
              <th>Officer firstName</th>
              <th>Officer lastName</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody>
            {officers.map((officer) => (
              <tr key={officer.email}>
                <td>{officer.firstName}</td>
                <td>{officer.lastName}</td>
                <td>
                  {/* <Button
                    btnText="Delete"
                    onClickBtn={this.deleteOfficer(officer, officer.email)}
                  /> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default OfficersList;
