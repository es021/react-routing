import React, { Component } from 'react';
import { render } from 'react-dom';

import { BrowserRouter, Route, NavLink, Switch, Redirect} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.js';


const Auth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};


import HomePage from './page/home';
import LoginPage from './page/login';
import AboutPage from './page/about';
import UserPage from './page/user';
import UsersPage from './page/users';

class PrimaryLayout extends React.Component{
    render() {
        console.log("from PrimaryLayout");
        //console.log(this.props); 
        var path = this.props.match.path;
       
        
        return(<div className="primary-layout">
        <header>
          {(path === '/auth') ? 'Auth Layout' : 'App Layout' }
          <ul>
            <li><NavLink to={`${path}/`} exact activeClassName="active">Home</NavLink></li>
            {(path === '/auth') 
            ? <li><NavLink to={`${path}/login`} activeClassName="active">Login</NavLink></li>
                : <li><NavLink to={`${path}/logout`} activeClassName="active">Logout</NavLink></li>}
            <li><NavLink to={`${path}/about`} activeClassName="active">About</NavLink></li>
            <li><NavLink to={`${path}/users`} activeClassName="active">Users</NavLink></li>
          </ul>
        </header>
        <Switch>
          <Route path={`${path}/`} exact component={HomePage} />
          <Route path={`${path}/login`} component={LoginPage} />
          <Route path={`${path}/about`} component={AboutPage} />
          <Route path={`${path}/users`} component={UsersPage} />
          <Route path={`${path}/user/:id`} component={UserPage} />
        </Switch>
      </div>);
    }
};

import AuthorizedRoute from './component/authorize-route';

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
          <Switch>
              <Route path="/auth" component={PrimaryLayout} />
              <AuthorizedRoute path="/app" component={PrimaryLayout} />
          </Switch>
        </BrowserRouter>
    </Provider>
);

render(<App />, document.getElementById('app'));