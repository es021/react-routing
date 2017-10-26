import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../redux/actions/user-actions';
import {NavLink} from 'react-router-dom';

//state is from redux reducer
// with multiple objects
function mapStateToProps(state, ownProps) {
    return {
        redux: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        loadUser: userActions.loadUser
    }, dispatch);
}

class UsersPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.loadUser();
    }

    render() {
        var data = this.props.redux.data;
        var fetching = this.props.redux.fetching;
        
        if (data) {
            var dataItems = data.map((d, i) =>
                <li key={i}><NavLink to={`/app/user/${d.id}`} activeClassName="active">{d.name}</NavLink></li>
            );
        }
        
        return(<div> 
        <h6>Users</h6>
        { (fetching)
                                ? <div>Loading..</div>
                                : <ul>{dataItems}</ul>
        } </div>);

    }
}

UsersPage.propTypes = {
    //cats: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
