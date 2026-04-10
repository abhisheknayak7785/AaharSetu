import React from 'react';

const Ssdashboard = () => {
    return (
        <div className="fade-in-up">
            <h2 className="section-title">Dashboard Overview</h2>
            <div className="card-grid card-grid-3">
                <div className="stat-card">
                    <div className="stat-card-icon green">
                        <span className="material-icons-round">inventory_2</span>
                    </div>
                    <div className="stat-card-info">
                        <h4>Total Stock</h4>
                        <div className="stat-value">250 kg</div>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-card-icon blue">
                        <span className="material-icons-round">group</span>
                    </div>
                    <div className="stat-card-info">
                        <h4>Registered Users</h4>
                        <div className="stat-value">124</div>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-card-icon yellow">
                        <span className="material-icons-round">local_shipping</span>
                    </div>
                    <div className="stat-card-info">
                        <h4>Distributions</h4>
                        <div className="stat-value">89</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ssdashboard;