class CaseFetches {
  // const token = localStorage.token;
  static getToken() {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHByb3ZlZCI6dHJ1ZSwiX2lkIjoiNWZhYWNkODUwYmQ3NTkwMDExZjNhODk3IiwiZW1haWwiOiJlbHphLnNoYXJAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoi0K3Qu9GM0LfQsCIsImxhc3ROYW1lIjoi0KjQsNGA0LDRhNGD0YLQtNC40L3QvtCy0LAiLCJjbGllbnRJZCI6ImE5NDMyYmJlNzM2NDVjMTgyNWE0YzQyNmRiNTlmNDdkIiwiX192IjowLCJpYXQiOjE2MDU5NDg4NDR9.QuzvIbYiGxAIu8y4UtyKMYvdcuHXnXmJJHmXWmjTOMI';
  }
  static getAllCases() {
    const token = this.getToken();
    return fetch('http://84.201.129.203:8888/api/cases', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());
  }

  static deleteCase(casesid) {
    const token = this.getToken();
    return fetch('http://84.201.129.203:8888/api/cases/' + casesid, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  }

  static addCase(caseItem) {
    const token = this.getToken();
    const createDate = new Date().toISOString();
    const off = caseItem.officer.value == '' ? null : caseItem.officer.value;
    return fetch('http://84.201.129.203:8888/api/cases', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        licenseNumber: caseItem.licenseNumber.value,
        color: caseItem.color.value,
        ownerFullName: caseItem.ownerFullName.value,
        createdAt: createDate,
        updateAt: createDate,
        date: caseItem.caseDate.value,
        status: 'new',
        type: caseItem.bicycleType.value,
        officer: off,
        description: caseItem.description.value,
      }),
    }).then((response) => response.json());
  }

  static editCase(caseItem, caseId) {
    const token = this.getToken();
    const off = caseItem.officer.value == '' ? null : caseItem.officer.value;
    return fetch('http://84.201.129.203:8888/api/cases/' + caseId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        licenseNumber: caseItem.licenseNumber.value,
        color: caseItem.color.value,
        ownerFullName: caseItem.ownerFullName.value,
        status: caseItem.status.value,
        updateAt: new Date().toISOString(),
        date: caseItem.caseDate.value,
        resolution: caseItem.resolution.value,
        type: caseItem.bicycleType.value,
        officer: off,
        description: caseItem.description.value,
      }),
    }).then((response) => response.json());
  }
}

export default CaseFetches;
