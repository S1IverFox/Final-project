import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn.jsx';
import SignUp from './components/auth/SignUp.jsx';
import Report from './components/public/Report.jsx';
import Main from './components/main/Main.jsx';
import Cases from './components/cases/Cases.jsx';
import Officers from './components/officers/Officers.jsx';
import Header from './components/main/Header.jsx';
import Footer from './components/main/Footer.jsx';

const bodyStyle = {
  display: 'block',
  margin: '0, auto',
  maxWidth: '2700px',
};

const mainStyle = {
  backgroundColor: '#343a40',
  margin: '0, auto',
  minHeight: '660px',
  padding: '50px',
};

function App() {
  return (
    <div style={bodyStyle}>
      <Header />
      <div style={mainStyle}>
        <Switch>
          <Route path="/" component={Main} exact={true} />
          <Route path="/public/report" component={Report} exact={true} />
          <Route path="/auth/sign_in" component={SignIn} exact={true} />
          <Route path="/auth/sign_up" component={SignUp} exact={true} />
          <Route path="/cases" component={Cases} exact={true} />
          <Route path="/officers" component={Officers} exact={true} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
