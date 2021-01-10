import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
    };
  }

  componentDidMount() {
    if (localStorage.currentUser) {
      const parsedUser = JSON.parse(localStorage.currentUser);
      this.setState({ currentUser: parsedUser });
    }
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <div className="main">
          <div>
            {currentUser._id ? (
              <div>
                <Button onClick={() => window.location.assign('/cases')}>
                  Сообщения о кражах
                </Button>
                <Button onClick={() => window.location.assign('/officers')}>
                  Ответственные сотрудники
                </Button>
              </div>
            ) : null}
          </div>
        </div>
        <Button onClick={() => window.location.assign('/public/report')}>
          Заявить о краже
        </Button>
      </div>
    );
  }
}

export default Main;
