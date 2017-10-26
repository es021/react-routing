import React, { Component } from 'react';
import {connect} from 'react-redux';

import { bindActionCreators } from 'redux';
import { Redirect} from 'react-router-dom';

//state is from redux reducer
// with multiple objects
function mapStateToProps(state, ownProps) {
    return {
        redux: state.auth
    };
}

class AuthorizedRoute extends React.Component {
    componentWillMount() {
        console.log("AuthorizedRoute");
    }

    render() {
        console.log("from AuthorizedRoute");
        console.log(this.props);
        //return(<div>yo</div>);

        var to = {};
        if (this.props.redux.isAuthorized) {
            to = {pathname: this.props.location.pathname, state: {from: this.props.location}};
            console.log("redirect to");
            console.log(to);
            //avoid recursion
            if (to.pathname === to.state.from.pathname) {

            }
            var match = {path:to.pathname};
            const { component: Component} = this.props;
            return (<Component {...this.props} match={this.props.computedMatch} />);
        } else {
            to = {pathname: '/auth/login', state: {from: this.props.location}};
            return(<Redirect to={to} />);
        }

        //return(<div>aa</div>);
        


    }
}


export default connect(mapStateToProps)(AuthorizedRoute);
