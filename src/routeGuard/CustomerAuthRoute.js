import React from 'react';
import {Route, Redirect} from 'react-router-dom';


const CustomerAuthRoute = ({ component : Component, ...rest}) => {

    const customer_token = localStorage.getItem('customer_token');

    return(
        <Route
            {...rest}

            render={props =>
                customer_token ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: {from: props.location}
                        }}
                    />
                )
            }
        />
    )
};


export default CustomerAuthRoute;