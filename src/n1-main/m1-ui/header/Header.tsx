import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className={'header'}>
            <a href="#/">Main</a>
            <a href="#/login">Login</a>
            <a href="#/registration">Registration</a>
            <a href="#/profile">Profile</a>
            <a href="#/create-new-password">New password</a>
            <a href="#/forgot-password">Forgot password</a>
            <a href="#/test-super-components">Super components</a>
        </div>
    );
};

export default Header;