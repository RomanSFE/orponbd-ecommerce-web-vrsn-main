import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const AdminAuthRoute = ({ component : Component, ...rest}) => {

    return(
        <Route
            {...rest}

            render={props =>
                rest.loggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/admin-signin",
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
        loggedIn: state.auth.loggedIn
    }
};

export default connect(mapStateToProps)(AdminAuthRoute);