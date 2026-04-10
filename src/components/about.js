import React from 'react';

const About = () => {
    return (
        <div className="page-container">
            <div className="content-section fade-in-up">
                <h1>About Us</h1>
                <p className="subtitle">Understanding the Public Distribution System</p>

                <div className="content-block">
                    <h2>
                        <span className="material-icons-round" style={{color: 'var(--accent-primary)'}}>history_edu</span>
                        History & Background
                    </h2>
                    <p>
                        In April, 1966 Statutory Rationing was introduced in Greater Mumbai and the Industrial 
                        complex of Thana which included the Thana Town, Kalyan, Belapur, Ulhasnagar and Ambernath. 
                        All these areas are operating the Rationing Scheme under provisions of the Maharashtra 
                        food grain (second) Ration Order of 1966.
                    </p>
                    <br />
                    <p>
                        The Rationing Organization is headed by the Controller of Rationing. The team comprises 
                        of 2 Deputy Controllers who assist The Controller in supervising Indent, Shops, 
                        Establishments, Administration, Accounts, General, Enforcement, Kerosene etc. There are 
                        other five Deputy Controller of Rationing that are incharge of each region, 04 in Mumbai 
                        and 01 in Thane.
                    </p>
                    <br />
                    <p>
                        General control is managed by Food and Civil Supplies department & they also issue 
                        directives in policy & other related matters. Mumbai & Thane area is serviced by 46 
                        Rationing offices. In each Rationing office the day to day functioning is supervised by 
                        1 to 2 Assistant Rationing Officers & is supervised by a Rationing Officer. Each 
                        Rationing Office works as Nodal Agency for issue / cancellation / changes in Ration Cards.
                    </p>
                </div>

                <div className="highlight-box fade-in-up" style={{animationDelay: '0.2s'}}>
                    <h2>
                        <span className="material-icons-round">verified</span>
                        Aim of the System
                    </h2>
                    <p style={{color: 'var(--text-secondary)', lineHeight: 1.8}}>
                        Our focus is to reduce the corruption in the ration distribution system. We all want a 
                        transparent system so no one can cheat with the ration system. This digital platform 
                        ensures accountability at every level of distribution.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;