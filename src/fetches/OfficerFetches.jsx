class OfficerFetches {
  static getToken() {
    const token = localStorage.token;
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
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(
          'Ошибка при получении списка ответсвенных сотрудников! Статус: ' +
            response.statusText
        );
      }
    });
  }

  static getOfficer(officerId) {
    const token = this.getToken();
    return fetch('http://84.201.129.203:8888/api/officers/' + officerId, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response
          .json()
          .then((data) => data.error.message)
          .then((message) => {
            throw new Error(message);
          });
      }
    });
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
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response
          .json()
          .then((data) => data.error.message)
          .then((message) => {
            throw new Error(message);
          });
      }
    });
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
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response
          .json()
          .then((data) => data.error.message)
          .then((message) => {
            throw new Error(message);
          });
      }
    });
  }
}

export default OfficerFetches;
