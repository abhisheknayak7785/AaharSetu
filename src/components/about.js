import React from 'react';

const About = () => {
    return (
        <div className="page-container">
            <div className="content-section fade-in-up">
                <h1>About Us</h1>
                <p className="subtitle">Understanding the Public Distribution System</p>

                <div className="content-block">
                    <h2>
                        <span className="material-icons-round" style={{ color: 'var(--accent-primary)' }}>history_edu</span>
                        History & Background
                    </h2>
                    <p>
                        In Uttar Pradesh, the Public Distribution System (PDS) operates under the framework of the National Food Security Act (NFSA), 2013, along with state-specific orders and guidelines issued by the government. The rationing system covers both urban and rural areas across the state to ensure food security for eligible beneficiaries.
                    </p>
                    <br />
                    <p>
                        The rationing system in Uttar Pradesh is managed by the Department of Food and Civil Supplies Uttar Pradesh. The overall administration is headed by senior officials such as the Commissioner/Director of Food and Civil Supplies, supported by Additional Commissioners, Joint Commissioners, and District Supply Officers (DSOs).
                    </p>
                    <br />
                    <p>
                        At the district level, the system is supervised by the District Supply Officer, who ensures smooth functioning of ration distribution, monitoring of fair price shops, and implementation of government policies. Each district is further divided into blocks and urban zones, where Supply Inspectors and other officials oversee operations.
                    </p>
                    <br />
                    <p>
                        Fair Price Shops (FPS), commonly known as ration shops, are established across villages, towns, and cities to distribute essential commodities like rice, wheat, sugar, and kerosene to beneficiaries. These shops operate under strict guidelines and are regularly monitored for transparency and efficiency.
                    </p>
                    <br />
                    <p>
                        Each ration card holder is registered in the system, and ration cards are issued, updated, or cancelled through designated offices and increasingly via online portals such as the eDistrict Uttar Pradesh and state PDS portals. Digitalization, including Aadhaar linking and e-POS machines at ration shops, has improved accountability and reduced leakages.
                    </p>
                    <br />
                    <p>
                        Overall policy decisions, control, and directives are issued by the state government through the Food and Civil Supplies Department, ensuring uniform implementation of food security schemes across Uttar Pradesh.
                    </p>
                </div>

                <div className="highlight-box fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h2
                        style={{
                            color: 'var(--text-primary)',
                            fontSize: '1.3rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            margin: 0
                        }}
                    >
                        <span
                            className="material-icons-round"
                            style={{ fontSize: '20px', color: '#8B5CF6' }}
                        >
                            track_changes
                        </span>
                        Aim of the System
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
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