import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StatementsList extends Component {
  state = {
    statemnt: '',
  };
  handlStatementChange = (e) => {
    const statemnt = e.target.value;
    this.setState({ statemnt });
  };

  handleOfficerCreate = () => {
    const { statemnt } = this.state;
    fetch('http://localhost:8080/api/report', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(statemnt),
    }).then(() => {
      alert('Заявка принята');
      this.setState({ statemnt: '' });
    });
  };

  render() {
    const { statemnt } = this.state;
    return (
      <div>
        <div>Officers</div>
        <textarea
          type="text"
          placeholder="Statemet"
          onChange={this.handlStatementChange}
        />
        <input
          type="button"
          onClick={this.handleOfficerCreate}
          disabled={!statemnt.length}
          value="Create"
        />
      </div>
    );
  }
}

export default StatementsList;

// {
//   id: 12342,
//   comment: 'dkjbvklfjbf',
// },
// {
//   id: 65768,
//   comment: 'rhmlkhj.gn',
// },
