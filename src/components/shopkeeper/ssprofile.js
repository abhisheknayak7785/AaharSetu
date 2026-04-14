import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const validEmailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const phonePattern = /^\d{10}$/;

const Ssprofile = (props) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [mobileno, setMobileno] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [dob, setDob] = useState(new Date());
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errors, setErrors] = useState({
        username: '', email: '', password: '', mobileno: ''
    });

    useEffect(() => {
        if (props.match && props.match.params.username) {
            axios.get("http://localhost:5000/shopkeeper/ssprofile/" + props.match.params.username, { withCredentials: true })
                .then(res => {
                    setFirstname(res.data.firstname || '');
                    setLastname(res.data.lastname || '');
                    setMobileno(res.data.mobileno || '');
                    setEmail(res.data.email || '');
                    setUsername(res.data.username || '');
                    setPassword(res.data.password || '');
                    setGender(res.data.duration || '');
                    setDob(new Date(res.data.dob));
                })
                .catch(err => console.log(err));
        }
    }, [props.match]);

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
        const user = { firstname, lastname, mobileno, email, username, dob: Date.parse(dob), gender, password };

        if (props.match && props.match.params.id) {
            axios.post('http://localhost:5000/shopkeeper/ssprofile/update/' + props.match.params.id, user, { withCredentials: true })
                .then(res => console.log(res.data));
        }
    };

    return (
        <div className="fade-in-up">
            <h2 className="section-title">Profile Details</h2>
            <div style={{ maxWidth: 540 }}>
                <div className="form-card">
                    <form onSubmit={onSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="ss-firstname">First Name</label>
                                <input type="text" id="ss-firstname" className="form-input" placeholder="First name"
                                    required value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="ss-lastname">Last Name</label>
                                <input type="text" id="ss-lastname" className="form-input" placeholder="Last name"
                                    required value={lastname} onChange={(e) => setLastname(e.target.value)} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="ss-mobile">Mobile Number</label>
                            <input type="tel" id="ss-mobile" className="form-input" placeholder="10-digit mobile"
                                required autoComplete="off" maxLength="10" inputMode="tel"
                                value={mobileno}
                                onChange={(e) => { setMobileno(e.target.value); validate('mobileno', e.target.value); }} />
                            {errors.mobileno && <div className="form-error">{errors.mobileno}</div>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="ss-email">Email Address</label>
                            <input type="text" id="ss-email" className="form-input" placeholder="you@example.com"
                                required value={email}
                                onChange={(e) => { setEmail(e.target.value); validate('email', e.target.value); }} />
                            {errors.email && <div className="form-error">{errors.email}</div>}
                            {errorMessage && <div className="form-error">{errorMessage}</div>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="ss-username">Username</label>
                            <input type="text" id="ss-username" className="form-input" placeholder="Username"
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
                            <label htmlFor="ss-password">Password</label>
                            <input type="password" id="ss-password" className="form-input" placeholder="Password"
                                required value={password}
                                onChange={(e) => { setPassword(e.target.value); validate('password', e.target.value); }} />
                            {errors.password && <div className="form-error">{errors.password}</div>}
                        </div>

                        <button type="submit" className="btn-primary-gradient">
                            <span className="material-icons-round" style={{ fontSize: '1.1rem' }}>save</span>
                            Update Profile
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Ssprofile;