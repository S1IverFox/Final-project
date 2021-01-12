class ReportFetches {
  static addReport(reportItem) {
    const createDate = new Date().toISOString();
    return fetch('http://84.201.129.203:8888/api/public/report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        licenseNumber: reportItem.licenseNumber.value,
        color: reportItem.color.value,
        ownerFullName: reportItem.ownerFullName.value,
        createdAt: createDate,
        updateAt: createDate,
        date: reportItem.caseDate.value,
        status: 'new',
        type: reportItem.bicycleType.value,
        description: reportItem.description.value,
        clientId: reportItem.clientId.value,
      }),
    }).then((response) => response.json());
  }
}
export default ReportFetches;
