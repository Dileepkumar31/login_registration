import React, { useState } from 'react';
import './Loginsignup.css';
import { FaUser, FaLock,FaEnvelope } from "react-icons/fa";

const LoginSignup = () => {
    const [showLogin, setShowLogin] = useState(true);

    const toggleForm = () => {
        setShowLogin(!showLogin);
    };

    return (
        <div className="wrapper">
            {/* Login Form */}
            {showLogin && (
                <div className="form-box">
                    <form action="">
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type='text' placeholder='Username' required />
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input type='password' placeholder='Password' required />
                            <FaLock className='icon' />
                        </div>

                        <div className="forgot-pass">
                            <label><input type='checkbox' /> Remember me</label>
                            <a href='#'>Forgot Password</a>
                        </div>

                        <button type='submit'>Login</button>
                        <div className="register-link">
                            <p>Don't have an account? <button onClick={toggleForm}>Register</button></p>
                        </div>
                    </form>
                </div>
            )}

            {/* Registration Form */}
            {!showLogin && (
                <div className="form-box green">
                    <form action="">
                        <h1>Registration</h1>
                        <div className="input-box">
                            <input type='email' placeholder='email' required />
                            <FaEnvelope className='icon' />
                        </div>
                        <div className="input-box">
                            <input type='text' placeholder='username' required />
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input type='password' placeholder='Password' required />
                            <FaLock className='icon' />
                        </div>

                        <button type='submit'>Register</button>
                        <div className="register-link">
                            <p>Already have an account? <button onClick={toggleForm}>Login</button></p>
                        </div>
                    </form>
                </div>
            )}

        </div>
    );
};

export default LoginSignup;
