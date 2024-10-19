import React, { useState, useRef, useEffect } from 'react';
import LoginImage from "../../assets/graphic1.svg";

const AuthForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const emailInputRef = useRef(null); // Create a ref for the email input

    const validateForm = () => {
        let valid = true;
        let errors = {};

        if (!isLogin) {
            if (!formData.firstName.trim()) {
                valid = false;
                errors.firstName = 'First name is required.';
            }
            if (!formData.lastName.trim()) {
                valid = false;
                errors.lastName = 'Last name is required.';
            }
        }


        if (!formData.email) {
            valid = false;
            errors.email = 'Email is required.';
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
            valid = false;
            errors.email = 'Please enter a valid email address.';
        }

        if (!formData.password) {
            valid = false;
            errors.password = 'Password is required.';
        } else if (!isLogin && (formData.password.length < 6 || !/[A-Z]/.test(formData.password) || !/[a-z]/.test(formData.password) || !/[0-9]/.test(formData.password))) {
            valid = false;
            errors.password = 'Password must be at least 6 characters and contain an uppercase letter, a lowercase letter, and a number.';
        }

        setErrors(errors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log(`${isLogin ? 'Login' : 'Signup'} Form Submitted:`, formData);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setErrors({}); // Clear errors when toggling forms
        setFormData({ firstName: '', lastName: '', email: '', password: '' }); // Reset form data
    };

    useEffect(() => {
        if (isLogin && emailInputRef.current) {
            emailInputRef.current.focus(); // Focus the email input when in login mode
        }
    }, [isLogin]);

    return (
        <div className='row p-0 m-0 w-100' style={{ minHeight: '100vh' }}>
            <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className='d-flex justify-content-center align-items-center' style={{ height: '100%' }}>
                    <img src={LoginImage} alt='LoginImage' className='w-75' />
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center bg-light">
                <div className='w-75'>
                    <h2 className="text-center mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
                    <form onSubmit={handleSubmit}>
                        {!isLogin && (
                            <>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        style={{ borderColor: errors.firstName ? 'red' : '' }}
                                        className="form-control"
                                    />
                                    {errors.firstName && <small style={{ color: 'red' }}>{errors.firstName}</small>}
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        style={{ borderColor: errors.lastName ? 'red' : '' }}
                                        className="form-control"
                                    />
                                    {errors.lastName && <small style={{ color: 'red' }}>{errors.lastName}</small>}
                                </div>
                            </>
                        )}

                        <div className="mb-3">
                            <input
                                type="email"
                                name="email"
                                ref={emailInputRef} // Attach the ref to the email input
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                style={{ borderColor: errors.email ? 'red' : '' }}
                                className="form-control"
                            />
                            {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
                        </div>

                        <div className="mb-3">
                            <div className="input-group">
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    style={{ borderColor: errors.password ? 'red' : '' }}
                                    className="form-control"
                                />
                                <span
                                    className="input-group-text cursor-pointer"
                                    onClick={() => setPasswordVisible(!passwordVisible)}
                                >
                                    <i className={`bi ${passwordVisible ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                                </span>
                            </div>
                            {errors.password && <small style={{ color: 'red' }}>{errors.password}</small>}
                        </div>

                        {/* Add Forgot Password link only for Login */}
                        {isLogin && (
                            <div className="mb-3 text-end pointer-cursor">
                                <a href="#" className="text-warning">Forgot Password?</a>
                            </div>
                        )}

                        <button type="submit" className="btn btn-primary w-100">
                            {isLogin ? 'Login' : 'Sign Up'}
                        </button>
                    </form>

                    <div className="text-center mt-4 ">
                        <p className=' '>
                            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                            <span className="text-warning cursor-pointer " onClick={toggleForm}>
                                {isLogin ? 'Sign Up' : 'Login'} here
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
