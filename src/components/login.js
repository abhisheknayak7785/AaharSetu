import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState({ email: '', password: '', message: '' });

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:5000/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            });
            const data = await res.json();
            if (data.user) {
                if (data.role === 'admin') {
                    window.location.assign('/admin');
                } else {
                    window.location.assign('/shopkeeper');
                }
            }
            if (data.errors) {
                setErrorMessage(data.errors);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="form-container">
            <div className="form-card fade-in-up">
                <div className="form-header">
                    <div style={{ 
                        width: 56, height: 56, borderRadius: '50%', 
                        background: 'var(--accent-gradient)', 
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 1rem', fontSize: '1.5rem'
                    }}>
                        <span className="material-icons-round" style={{color: 'white'}}>lock</span>
                    </div>
                    <h2>Welcome Back</h2>
                    <p>Only shopkeeper & admin can login</p>
                </div>

                {errorMessage.message && (
                    <div style={{ 
                        textAlign: 'center', color: 'var(--danger)', 
                        fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem',
                        padding: '0.75rem', background: 'rgba(229, 49, 112, 0.1)',
                        borderRadius: 'var(--radius-sm)', border: '1px solid rgba(229, 49, 112, 0.2)'
                    }}>
                        {errorMessage.message}
                    </div>
                )}

                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="login-email">Username / Email</label>
                        <input
                            type="text"
                            id="login-email"
                            className="form-input"
                            placeholder="Enter your email"
                            required
                            autoFocus
                            autoComplete="off"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errorMessage.email && <div className="form-error">{errorMessage.email}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="login-password">Password</label>
                        <input
                            type="password"
                            id="login-password"
                            className="form-input"
                            placeholder="Enter your password"
                            required
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errorMessage.password && <div className="form-error">{errorMessage.password}</div>}
                    </div>

                    <button type="submit" className="btn-primary-gradient">
                        <span className="material-icons-round" style={{fontSize: '1.1rem'}}>login</span>
                        Sign In
                    </button>
                </form>

                <div className="form-footer">
                    Don't have an account? <NavLink to="/register">Register here</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Login;
