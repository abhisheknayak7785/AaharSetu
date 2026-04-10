import React, { useState } from 'react';

const Complaint = () => {
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({ email, query });
        // TODO: Add API call
    };

    return (
        <div className="form-container">
            <div className="form-card fade-in-up">
                <div className="form-header">
                    <div style={{
                        width: 56, height: 56, borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--danger), #ff6b6b)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 1rem', fontSize: '1.5rem'
                    }}>
                        <span className="material-icons-round" style={{ color: 'white' }}>report_problem</span>
                    </div>
                    <h2>File a Complaint</h2>
                    <p>We will look into your issue promptly</p>
                </div>

                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="complaint-email">Your Email</label>
                        <input
                            type="email"
                            id="complaint-email"
                            className="form-input"
                            placeholder="Enter your email address"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="complaint-query">Describe Your Issue</label>
                        <textarea
                            id="complaint-query"
                            className="form-input"
                            placeholder="Please explain your complaint in detail..."
                            required
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn-primary-gradient" style={{
                        background: 'linear-gradient(135deg, var(--danger), #ff6b6b)'
                    }}>
                        <span className="material-icons-round" style={{ fontSize: '1.1rem' }}>send</span>
                        Submit Complaint
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Complaint;