import './user.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Sign_in from './components/auth/sign_in/Sign_in.jsx';
import Sign_up from './components/auth/sign_up/Sign_up.jsx';
import Auth from './components/auth/Auth.jsx';
import Report from './components/public/Report.jsx';
import Main from './components/main/Main.jsx';
import Cases from './components/cases/Cases.jsx';
import reducer from './components/auth/reducer.jsx';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import Officer from './components/officers/Officer.jsx';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <div>
      <div className="main">
        <Switch>
          <Route path="/" component={Main} exact={true} />
          <Route path="/public/report" component={Report} exact={true} />
          <Route path="/auth/sign_in" component={Sign_in} exact={true} />
          <Route path="/auth/sign_up" component={Sign_up} exact={true} />
          <Route path="/auth" component={Auth} exact={true} />
          <Route path="/cases" component={Cases} exact={true} />
          <Route path="/officers" component={Officer} exact={true} />
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
