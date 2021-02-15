import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import './userotp.css';
import OtpInput from 'react-otp-input';
import {customerHttp} from "../../../ApiServices/customer_http_service";
import Swal from "sweetalert2";

export default class UserOtp extends Component {
    state = { otp: '', toHomePag: false };

    handleVerify = (e) => {
      e.preventDefault();

      let phone = this.props.match.params.phone;

      const data = {
          otp: this.state.otp
      };

      customerHttp().post(`/customerauth/customer/verify/${phone}`,data).then(res => {

          this.setState({
              toHomePag: true
          });

          Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: res.data.message,
              showConfirmButton: false,
              timer: 5000
          });

      })
    };

    handleResend = (e) => {
        e.preventDefault();

        let phone = this.props.match.params.phone;

        customerHttp().post(`/customerauth/customer/Resend/${phone}`).then(res => {
            
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: res.data.message,
                showConfirmButton: false,
                timer: 5000
            });
        })
    };
 
    handleChange = otp => this.setState({ otp });

    render() {

        if (this.state.toHomePag === true) {
            return <Redirect to={'/'} />
        }

        return (
            <>
            <div className="user-obd-otp-wv-main-section-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="user-obd-otp-wv-main-section-box-sec-content mx-auto">

                                <div className="user-obd-otp-wv-main-section-box-sec-inppt-hedd-txt text-center">
                                    <h3>Complete Verification </h3>
                                    <p>Enter the code we just send on your <br/> mobile phone <span>+{this.props.match.params.phone}</span></p>
                                </div>

                               <div className="user-obd-otp-wv-main-section-box-sec-inppt text-center">
                                <OtpInput
                                        value={this.state.otp}
                                        onChange={this.handleChange}
                                        numInputs={4}
                                        separator={<span>-</span>}
                                    />
                               </div>

                               <div className="user-obd-otp-wv-main-section-box-sec-inppt-hedd-txt-dont-get-cod text-center">
                                    <h4>Don't receive the code? <span><button type="submit" onClick={this.handleResend}>Resend</button></span></h4>
                               </div>

                               <div className="user-obd-otp-wv-main-section-box-sec-inppt-confrn-btn text-center">
                                   <ul>
                                       <li><Link to="/">Back</Link></li>
                                       <li><button type="submit" onClick={this.handleVerify}>Verify</button></li>
                                   </ul>
                               </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
