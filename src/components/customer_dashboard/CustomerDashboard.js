import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class CustomerDashboard extends Component{


    handleLogout = (e) => {
        e.preventDefault();

        localStorage.removeItem('customer_token');

        this.props.setLogout();

        this.props.history.push('/');
    };

    render(){

        return(
            <div className="customer_dashboard">
                <h5>Welcome To {this.props.customerName.name}</h5>
                {
                    !this.props.customerLoggedIn ?
                        (
                            <p>You are not customer</p>
                        ): <Link to="/customer-logout" className="btn btn-sm btn-primary" onClick={this.handleLogout}>Logout</Link>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        customerName: state.customerAuth.customers,
        customerLoggedIn: state.customerAuth.customerLoggedIn
    }
};

const mapDispatchToProps = dispatch => {
    return{
        setLogout: () => dispatch({type: 'CUSTOMER_LOGOUT'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDashboard);