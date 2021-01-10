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
    if (confirm('Are you sure?')) {
      OfficerFetches.deleteOfficer(officerId)
        .then((response) => {
          if (response.ok) {
            alert('succsess');
            this.refreshList();
          } else {
            alert('can not delete officer with id:' + officerId);
          }
        })
        .catch((err) => console.log(err));
    }
  }

  updateApproveStatus(officer) {
    OfficerFetches.updateApproveStatus(officer).then(() => {
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
        <Table striped bordered hover>
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

export default Officers;
