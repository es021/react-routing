import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class HomePage extends React.Component {

    handleRedirect() {
        browserHistory.push('/');
    }

    render() {
        return (
                <div>Home Page New
                    <br/>
                    <a><NavLink to="/user/2" activeClassName="active">User 2</NavLink></a>
                </div>
                );
    }
}


