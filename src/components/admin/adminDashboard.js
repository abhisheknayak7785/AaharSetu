import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [count, setCount] = useState('—');

    useEffect(() => {
        axios.get("http://localhost:5000/admin/admin-dashboard")
            .then(res => setCount(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="fade-in-up">
            <h2 className="section-title">Dashboard Overview</h2>
            <div className="card-grid card-grid-3">
                <div className="stat-card">
                    <div className="stat-card-icon green">
                        <span className="material-icons-round">store</span>
                    </div>
                    <div className="stat-card-info">
                        <h4>Shopkeepers</h4>
                        <div className="stat-value">{count}</div>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-card-icon pink">
                        <span className="material-icons-round">feedback</span>
                    </div>
                    <div className="stat-card-info">
                        <h4>Complaints</h4>
                        <div className="stat-value">45</div>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-card-icon blue">
                        <span className="material-icons-round">pending_actions</span>
                    </div>
                    <div className="stat-card-info">
                        <h4>Pending Requests</h4>
                        <div className="stat-value">86</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;