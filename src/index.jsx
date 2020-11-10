import './user.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Sign_in from './components/auth/sign_in/Sign_in.jsx';
import Sign_up from './components/auth/sign_up/Sign_up.jsx';
import Auth from './components/auth/Auth.jsx';
import StatementsList from './components/public/StatementsList.jsx';
import Main from './components/main/Main.jsx';
import Cases from './components/cases/Cases.jsx';
import Officers from './components/officers/Officers.jsx';
import reducer from './components/auth/reducer.jsx';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <div>
      <div className="main">
        <Switch>
          <Route path="/" component={Main} exact={true} />
          <Route path="/api/report" component={StatementsList} exact={true} />
          <Route path="/api/auth/sign_in" component={Sign_in} exact={true} />
          <Route path="/api/auth/sign_up" component={Sign_up} exact={true} />
          <Route path="/api/auth" component={Auth} exact={true} />
          <Route path="/api/public/cases" component={Cases} exact={true} />
          <Route path="/api/officers" component={Officers} exact={true} />
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
