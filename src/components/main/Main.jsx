import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { checkUser } from './CheckUser.jsx';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
    };
  }

  componentDidMount() {
    checkUser();
    this.setState({ currentUser: checkUser() });
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
                  Украденные велосипеды
                </Button>
                <Button onClick={() => window.location.assign('/officers')}>
                  Ответственные сотрудники
                </Button>
              </div>
            ) : null}
          </div>
        </div>
        <Button onClick={() => window.location.assign('/public/report')}>
          Сообщить о краже
        </Button>
      </div>
    );
  }
}

export default Main;
