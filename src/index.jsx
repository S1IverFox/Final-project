import './user.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import SignIn from './components/auth/sign/SignIn.jsx';
import SignUp from './components/auth/sign/SignUp.jsx';
import Report from './components/public/Report.jsx';
import Main from './components/main/Main.jsx';
import Cases from './components/cases/Cases.jsx';
import reducer from './components/auth/reducer.jsx';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import Officers from './components/officers/Officers.jsx';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <div>
      <div className="main">
        <Switch>
          <Route path="/" component={Main} exact={true} />
          <Route path="/public/report" component={Report} exact={true} />
          <Route path="/auth/sign_in" component={SignIn} exact={true} />
          <Route path="/auth/sign_up" component={SignUp} exact={true} />
          <Route path="/cases" component={Cases} exact={true} />
          <Route path="/officers" component={Officers} exact={true} />
        </Switch>
      </div>
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
