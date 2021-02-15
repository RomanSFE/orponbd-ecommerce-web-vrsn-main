import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class AdminDashboard extends Component{

    constructor(props){
        super(props);

        this.state = {
            name: props.userName.name
        }
    }

    handleLogout = (e) => {
        e.preventDefault();

        localStorage.removeItem('token');

        this.props.setLogout();
    };

    render(){
        return(
            <div className="admin_dashboard">
                <h5>{this.state.name} Welcome DashBoard</h5>
                <p>
                    {
                        !this.props.loggedIn ?
                            (
                                <p>You are not Admin</p>
                            ):<Link to="/logout" className="btn btn-sm btn-primary" onClick={this.handleLogout}>Logout</Link>
                    }

                </p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userName: state.auth.users,
        loggedIn: state.auth.loggedIn
    }
};

const mapDispatchToProps = dispatch => {
    return{
        setLogout: () => dispatch({ type: 'SET_LOGOUT'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);