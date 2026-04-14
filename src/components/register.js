import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const validEmailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const phonePattern = /^\d{10}$/;

const Register = (props) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [mobileno, setMobileno] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [dob, setDob] = useState(new Date());
    const [gender, setGender] = useState('');
    const [role, setRole] = useState('beneficiary');
    const [password, setPassword] = useState('');
    const [aadhaarId, setAadhaarId] = useState('');
    const [rationCardType, setRationCardType] = useState('APL');
    const [familyMembersCount, setFamilyMembersCount] = useState(1);
    const [errorMessage, setErrorMessage] = useState('');
    const [errors, setErrors] = useState({
        username: '', email: '', password: '', mobileno: ''
    });

    const validate = (name, value) => {
        const newErrors = { ...errors };
        switch (name) {
            case 'username':
                newErrors.username = value.length < 5 ? 'Username must be at least 5 characters long!' : '';
                break;
            case 'mobileno':
                newErrors.mobileno = phonePattern.test(value) ? '' : 'Mobile no is not valid!';
                break;
            case 'email':
                newErrors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
                break;
            case 'password':
                newErrors.password = value.length < 6 ? 'Password must be at least 6 characters long!' : '';
                break;
            default:
                break;
        }
        setErrors(newErrors);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const user = { firstname, lastname, mobileno, email, username, dob: Date.parse(dob), gender, role, password };
        if (role === 'beneficiary') {
            user.aadhaarId = aadhaarId;
            user.rationCardType = rationCardType;
            user.familyMembersCount = familyMembersCount;
        }
        try {
            const res = await fetch('http://localhost:5000/register', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            });

            const data = await res.json();

            if (data.user) {
                if (data.role === 'admin') {
                    window.location.assign('/admin');
                } else if (data.role === 'shopkeeper') {
                    window.location.assign('/shopkeeper');
                } else {
                    window.location.assign('/beneficiary');
                }
            }

            if (data.err) {
                setErrorMessage(data.err);
            }

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="form-container" style={{ maxWidth: 540 }}>
            <div className="form-card fade-in-up">
                <div className="form-header">
                    <div style={{
                        width: 56, height: 56, borderRadius: '50%',
                        background: 'var(--accent-gradient)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 1rem', fontSize: '1.5rem'
                    }}>
                        <span className="material-icons-round" style={{ color: 'white' }}>person_add</span>
                    </div>
                    <h2>Create Account</h2>
                    <p>Register as a Beneficiary, Shopkeeper or Admin</p>
                </div>

                {errorMessage && (
                    <div style={{
                        textAlign: 'center', color: 'var(--danger)',
                        fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem',
                        padding: '0.75rem', background: 'rgba(229, 49, 112, 0.1)',
                        borderRadius: 'var(--radius-sm)', border: '1px solid rgba(229, 49, 112, 0.2)'
                    }}>
                        {errorMessage}
                    </div>
                )}

                <form onSubmit={onSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="reg-firstname">First Name</label>
                            <input type="text" id="reg-firstname" className="form-input" placeholder="First name"
                                required autoFocus value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="reg-lastname">Last Name</label>
                            <input type="text" id="reg-lastname" className="form-input" placeholder="Last name"
                                required value={lastname} onChange={(e) => setLastname(e.target.value)} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="reg-mobile">Mobile Number</label>
                        <input type="tel" id="reg-mobile" className="form-input" placeholder="10-digit mobile number"
                            required autoComplete="off" maxLength="10" inputMode="tel"
                            value={mobileno}
                            onChange={(e) => { setMobileno(e.target.value); validate('mobileno', e.target.value); }} />
                        {errors.mobileno && <div className="form-error">{errors.mobileno}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="reg-email">Email Address</label>
                        <input type="text" id="reg-email" className="form-input" placeholder="you@example.com"
                            required value={email}
                            onChange={(e) => { setEmail(e.target.value); validate('email', e.target.value); }} />
                        {errors.email && <div className="form-error">{errors.email}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="reg-username">Username</label>
                        <input type="text" id="reg-username" className="form-input" placeholder="Choose a username"
                            required value={username}
                            onChange={(e) => { setUsername(e.target.value); validate('username', e.target.value); }} />
                        {errors.username && <div className="form-error">{errors.username}</div>}
                    </div>

                    <div className="form-group">
                        <label>Date of Birth</label>
                        <DatePicker
                            placeholderText="Select date of birth"
                            dateFormat="dd/MM/yyyy"
                            autoComplete="off"
                            selected={dob}
                            onChange={(date) => setDob(date)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Gender</label>
                        <div className="radio-group">
                            <label className="radio-label">
                                <input type="radio" name="gender" value="Male"
                                    checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} />
                                Male
                            </label>
                            <label className="radio-label">
                                <input type="radio" name="gender" value="Female"
                                    checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} />
                                Female
                            </label>
                            <label className="radio-label">
                                <input type="radio" name="gender" value="Other"
                                    checked={gender === 'Other'} onChange={(e) => setGender(e.target.value)} />
                                Other
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Role</label>
                        <div className="radio-group">
                            <label className="radio-label">
                                <input type="radio" name="role" value="beneficiary"
                                    checked={role === 'beneficiary'} onChange={(e) => setRole(e.target.value)} />
                                Beneficiary
                            </label>
                            <label className="radio-label">
                                <input type="radio" name="role" value="shopkeeper"
                                    checked={role === 'shopkeeper'} onChange={(e) => setRole(e.target.value)} />
                                Shopkeeper
                            </label>
                            <label className="radio-label">
                                <input type="radio" name="role" value="admin"
                                    checked={role === 'admin'} onChange={(e) => setRole(e.target.value)} />
                                Admin
                            </label>
                        </div>
                    </div>

                    {role === 'beneficiary' && (
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="reg-aadhaar">Aadhaar ID</label>
                                <input type="text" id="reg-aadhaar" className="form-input" placeholder="12-digit Aadhaar"
                                    required value={aadhaarId} onChange={(e) => setAadhaarId(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="reg-cardtype">Ration Card Type</label>
                                <select id="reg-cardtype" className="form-input" style={{ padding: '0.6rem' }} value={rationCardType} onChange={(e) => setRationCardType(e.target.value)}>
                                    <option value="APL">APL (Above Poverty Line)</option>
                                    <option value="BPL">BPL (Below Poverty Line)</option>
                                    <option value="Antyodaya">Antyodaya</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="reg-family">Family Members Count</label>
                                <input type="number" id="reg-family" className="form-input" min="1"
                                    required value={familyMembersCount} onChange={(e) => setFamilyMembersCount(e.target.value)} />
                            </div>
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="reg-password">Password</label>
                        <input type="password" id="reg-password" className="form-input" placeholder="Minimum 6 characters"
                            required value={password}
                            onChange={(e) => { setPassword(e.target.value); validate('password', e.target.value); }} />
                        {errors.password && <div className="form-error">{errors.password}</div>}
                    </div>

                    <button type="submit" className="btn-primary-gradient">
                        <span className="material-icons-round" style={{ fontSize: '1.1rem' }}>how_to_reg</span>
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
