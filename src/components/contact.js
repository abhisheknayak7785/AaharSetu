import React from 'react';

const Contact = () => {
    return (
        <div className="page-container">
            <div className="content-section fade-in-up">
                <h1>Contact Us</h1>
                <p className="subtitle">Get in touch for queries, complaints, or assistance</p>

                <div className="contact-grid">
                    <div className="contact-card">
                        <div className="contact-icon">
                            <span className="material-icons-round">call</span>
                        </div>
                        <div className="contact-info">
                            <h4>Controller of Rationing</h4>
                            <p> 1800-1800-150</p>
                        </div>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">
                            <span className="material-icons-round">email</span>
                        </div>
                        <div className="contact-info">
                            <h4>Official Email</h4>
                            <p>up.fncs@gmail.com</p>
                        </div>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">
                            <span className="material-icons-round">apartment</span>
                        </div>
                        <div className="contact-info">
                            <h4>Mantralaya</h4>
                            <p>Tel: 0522-2288658 (Shri Anil Kumar)</p>
                        </div>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">
                            <span className="material-icons-round">support_agent</span>
                        </div>
                        <div className="contact-info">
                            <h4>Tollfree Helpline</h4>
                            <p>1967 or 1800-180-0150</p>
                        </div>
                    </div>
                </div>

                <div className="content-block" style={{marginTop: '2rem', textAlign: 'center'}}>
                    <p>
                        For more details visit the official website:{' '}
                        <a href="https://fcs.up.gov.in/Index.aspx" 
                           target="_blank" rel="noopener noreferrer"
                           style={{fontWeight: 600}}>
                            Controller of Rationing, UttarPradesh
                            <span className="material-icons-round" style={{fontSize: '0.9rem', verticalAlign: 'middle', marginLeft: 4}}>open_in_new</span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;