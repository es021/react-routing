import React, { Component } from 'react';

export default class HomePage extends React.Component {

    handleRedirect() {
        browserHistory.push('/');
    }

    render() {
        return (
                <div>Home Page New
                  
                </div>
                );
    }
}


