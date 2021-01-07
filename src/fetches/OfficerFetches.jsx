class OfficerFetches {
  static getToken() {
    const token = localStorage.token;
    // const token =
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHByb3ZlZCI6dHJ1ZSwiX2lkIjoiNWZmMmU3NjIwYmQ3NTkwMDExZjNhYTMyIiwiZW1haWwiOiJlbHphLnNoYXJAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoi0K3Qu9GM0LfQsCIsImxhc3ROYW1lIjoi0KjQsNGA0LDRhNGD0YLQtNC40L3QvtCy0LAiLCJjbGllbnRJZCI6ImE5NDMyYmJlNzM2NDVjMTgyNWE0YzQyNmRiNTlmNDdkIiwiX192IjowLCJpYXQiOjE2MDk3OTEyNTR9.GWmInroQnva3Jfi3chnTDb6MMc_Ti7oHCiGF1Tr9g2U';
    return token;
  }

  static getAllOfficers() {
    const token = this.getToken();
    return fetch('http://84.201.129.203:8888/api/officers', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());
  }

  static getOfficer(officerId) {
    const token = this.getToken();
    return fetch('http://84.201.129.203:8888/api/officers/' + officerId, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());
  }

  static deleteOfficer(officerId) {
    const token = this.getToken();
    return fetch('http://84.201.129.203:8888/api/officers/' + officerId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  }

  static updateApproveStatus(officer) {
    const officerId = officer._id;
    const token = this.getToken();
    return fetch('http://84.201.129.203:8888/api/officers/' + officerId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        approved: !officer.approved,
      }),
    }).then((response) => response.json());
  }

  static editOfficer(officerItem, officerId) {
    const token = this.getToken();
    return fetch('http://84.201.129.203:8888/api/officers/' + officerId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        email: officerItem.email.value,
        firstName: officerItem.firstName.value,
        lastName: officerItem.lastName.value,
        password: officerItem.password.value,
        approved: officerItem.approved.checked,
      }),
    }).then((response) => response.json());
  }

  static addOfficer(officerItem) {
    const token = this.getToken();
    return fetch('http://84.201.129.203:8888/api/officers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        email: officerItem.email.value,
        firstName: officerItem.firstName.value,
        lastName: officerItem.lastName.value,
        password: officerItem.password.value,
        approved: officerItem.approved.checked,
      }),
    }).then((response) => response.json());
  }
}

export default OfficerFetches;
