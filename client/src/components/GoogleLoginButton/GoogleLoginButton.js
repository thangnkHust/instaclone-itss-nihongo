import React from 'react';
import classNames from 'classnames';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
import axios from 'axios'

// import Icon from '../Icon/Icon';

const GoogleLoginButton = ({ button, style }) => {
    const authState = Math.random().toString(36).slice(2);
    sessionStorage.setItem('authState', authState);

    const signup = (res) => {
        const googleresponse = {
            Name: res.profileObj.name,
            email: res.profileObj.email,
            token: res.googleId,
            Image: res.profileObj.imageUrl,
            ProviderId: 'Google'
        };
        // debugger;
        // <Redirect to={`/login&state=${authState}&scope=user:email`} />
    };

    const responseGoogle = (response) => {
        console.log(response);
        var res = response.profileObj;
        console.log(res);
        // debugger;
        signup(response);
    }

    return (
        <a
            // href={`https://github.com/login/oauth/authorize?client_id=${process.env.NODE_ENV === 'development'
            //         ? 'bcefdabdfe3512135737'
            //         : '562f69062d65058bc089'
            //     }&redirect_uri=${window.location.origin
            //     }/login&state=${authState}&scope=user:email`}
            className={classNames({ 'github-login-button': true, button })}
            style={style}
        >
            <GoogleLogin
                clientId="109613432529-m3p2ubn7i5ons711fu8eto9ukupdj20a.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />
        </a>
    );
};

export default GoogleLoginButton;
