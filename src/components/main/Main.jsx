import React, { Component } from 'react';
import { Button, Container, Jumbotron } from 'react-bootstrap';
import { checkUser } from './CheckUser.jsx';
import Slider from './Slider.jsx';

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

  jumbotronStyle = {
    display: 'flex',
    position: 'relative',
    backgroundColor: '#fff3e1e7',
    padding: '5rem 2rem 6rem 2rem',
  };

  sliderStyle = {
    display: 'block',
    width: '90%',
    justifyContent: 'center',
    margin: '0',
  };

  blockTextStyle = {
    display: 'block',
    position: 'absolute',
    paddingLeft: '65%',
    marginLeft: '5%',
    marginRight: '5%',
  };

  hiddenButtonStyle = {
    display: 'block',
    position: 'absolute',
    bottom: '25px',
    marginLeft: '70px',
  };

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <div>
          <Container>
            <Jumbotron style={this.jumbotronStyle}>
              <Slider style={this.sliderStyle} />
              <div style={this.blockTextStyle}>
                <h4>Приветствуем Вас!</h4>
                <h5
                  style={{
                    color: '#8f4216',
                  }}
                >
                  Здесь Вы можете оставить сведения о нашем велосипеде, который
                  был украден. Мы будем вести учет этих случаев и отслеживать
                  прогресc. Спасибо за Вашу помощь!
                </h5>
                <Button
                  variant="outline-danger"
                  style={this.buttonStyle}
                  onClick={() => window.location.assign('/public/report')}
                >
                  Сообщить о краже
                </Button>
              </div>
              <div style={this.hiddenButtonStyle}>
                {currentUser._id ? (
                  <div>
                    <Button
                      variant="outline-info"
                      style={{ marginRight: '10px' }}
                      onClick={() => window.location.assign('/cases')}
                    >
                      Украденные велосипеды
                    </Button>
                    <Button
                      variant="outline-info"
                      style={this.buttonStyle}
                      onClick={() => window.location.assign('/officers')}
                    >
                      Ответственные сотрудники
                    </Button>
                  </div>
                ) : null}
              </div>
            </Jumbotron>
          </Container>
        </div>
      </div>
    );
  }
}

export default Main;
