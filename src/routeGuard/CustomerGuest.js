import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const CustomerGuest = ({ component : Component, ...rest}) => {
    return(
        <Route
            {...rest}

            render={props =>
                !rest.customerLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/customer-dashboard",
                            state: {from: props.location}
                        }}
                    />
                )
            }
        />
    )
};

const mapStateToProps = (state) => {
    return{
        customerLoggedIn: state.customerAuth.customerLoggedIn
    }
};

export default connect(mapStateToProps)(CustomerGuest);