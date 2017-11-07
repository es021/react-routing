import React, { Component }
from 'react';

import { render }
from 'react-dom';

import { BrowserRouter, Route, NavLink, Switch, Redirect}
from 'react-router-dom'

import { Provider }
from 'react-redux'

import { store }
from './redux/store.js';

import HomePage from './page/home';
import LoginPage from './page/login';
import AboutPage from './page/about';
import LogoutPage from './page/logout';
import UserPage from './page/user';
import UsersPage from './page/users';
import HallPage from './page/hall';

require("./css/app.css");
require("./lib/font-awesome-4.7.0/css/font-awesome.css");

class PrimaryLayout extends React.Component{
    render() {
        //console.log("from PrimaryLayout");
        //console.log(this.props); 

        var path = this.props.match.path;
        const isApp = (path === '/app');

        var title = (isApp) ? 'App Layout' : 'Auth Layout';

        var menuBar = (isApp) 
        ?   <ul>
                <li><NavLink to={`${path}/`} exact activeClassName="active">Home</NavLink></li>
                <li><NavLink to={`${path}/about`} activeClassName="active">About</NavLink></li>
                <li><NavLink to={`${path}/users`} activeClassName="active">Users</NavLink></li>
                <li><NavLink to={`${path}/logout`} activeClassName="active">Logout</NavLink></li>
            </ul>
        :   <ul>
                <li><NavLink to={`${path}/`} exact activeClassName="active">Home</NavLink></li>
                <li><NavLink to={`${path}/about`} activeClassName="active">About</NavLink></li>
                <li><NavLink to={`${path}/hall`} activeClassName="active">Hall</NavLink></li>
                <li><NavLink to={`${path}/login`} activeClassName="active">Login</NavLink></li>
            </ul>
        ;

        var route = (isApp) 
        ?   <Switch>
                <Route path={`${path}/`} exact component={HomePage} />
                <Route path={`${path}/about`} component={AboutPage} />
                <Route path={`${path}/logout`} component={LogoutPage} />
                <Route path={`${path}/users`} component={UsersPage} />
                <Route path={`${path}/user/:id`} component={UserPage} />
            </Switch>
        :   <Switch>
                <Route path={`${path}/`} exact component={HomePage} />
                <Route path={`${path}/hall`} component={HallPage} />
                <Route path={`${path}/login`} component={LoginPage} />
                <Route path={`${path}/about`} component={AboutPage} />
            </Switch>
        ;

        return(<div className="primary-layout">
            <header>
                This is Header
            </header>
            <left_nav>
                {title}
                {menuBar}
            </left_nav>
            <div className="content">
            {route}
            </div>
            <footer>
                This is Footer
            </footer>
        </div>);
    }
};

import AuthorizedRoute from './component/authorize-route';
const App = () => (
<Provider store={store}>
    <BrowserRouter>
        <Switch>
        <AuthorizedRoute path="/app" component={PrimaryLayout} />
        <Route path="/auth" component={PrimaryLayout} />
        </Switch>
    </BrowserRouter>
</Provider>
);

render(<App />, document.getElementById('app'));