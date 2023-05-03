import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div>
            <div>
                <h1 className="text-5xl font-bold text-center">Login now!</h1>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to='/registration' href="#" className="label-text-alt link link-hover">Don't have a account? Register now.</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <img

                                className="social-button"
                                src="https://i.ibb.co/gSTHXZJ/google-btn.png"
                                alt=""
                            />
                            <img

                                className="social-button"
                                src="https://i.ibb.co/g9f4P0S/github-btn.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;