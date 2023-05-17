import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const toggleForm = (formType) => {
        setIsLoginForm(formType === 'login');
    };

    const handleRegister = (e) => {
        e.preventDefault();

        // Make the API call using fetch
        fetch('http://localhost:4444/api/v1/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerData),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response data
                console.log(data);
            })
            .catch((error) => {
                // Handle any error that occurred during the request
                console.error(error);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRegisterData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    return (
        <div className="login-container">
            <div className="login-tabs">
                <button
                    className={isLoginForm ? 'active' : ''}
                    onClick={() => toggleForm('login')}
                >
                    Login
                </button>
                <button
                    className={!isLoginForm ? 'active' : ''}
                    onClick={() => toggleForm('register')}
                >
                    Register
                </button>
            </div>
            <div className="login-content">
                {isLoginForm ? (
                    <form className="login-form">
                        {/* Your login form elements */}
                        {/* Example: */}
                        <div className="form-group">
                            <label htmlFor="login-email">Email</label>
                            <input type="email" id="login-email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="login-password">Password</label>
                            <input type="password" id="login-password" placeholder="Enter your password" />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                ) : (
                    <form className="register-form" onSubmit={handleRegister}>
                        {/* Your register form elements */}
                        {/* Example: */}
                        <div className="form-group">
                            <label htmlFor="register-name">Name</label>
                            <input type="text" id="register-name" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="register-email">Email</label>
                            <input type="email" id="register-email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="register-password">Password</label>
                            <input type="password" id="register-password" placeholder="Enter your password" />
                        </div>
                        <button type="submit">Register</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Login;
