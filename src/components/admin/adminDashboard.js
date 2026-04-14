import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [analytics, setAnalytics] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/api/admin/analytics", { withCredentials: true })
            .then(res => setAnalytics(res.data))
            .catch(err => console.log(err));
    }, []);

    if (!analytics) return <div>Loading Analytics...</div>;

    return (
        <div className="fade-in-up">
            <h2 className="section-title">Government Admin Overview</h2>
            <div className="card-grid card-grid-3">
                <div className="stat-card">
                    <div className="stat-card-icon green">
                        <span className="material-icons-round">store</span>
                    </div>
                    <div className="stat-card-info">
                        <h4>Registered Shops</h4>
                        <div className="stat-value">{analytics.counts?.totalShops || 0}</div>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-card-icon blue">
                        <span className="material-icons-round">groups</span>
                    </div>
                    <div className="stat-card-info">
                        <h4>Total Users</h4>
                        <div className="stat-value">{analytics.counts?.totalUsers || 0}</div>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-card-icon yellow">
                        <span className="material-icons-round">receipt_long</span>
                    </div>
                    <div className="stat-card-info">
                        <h4>Total Distributions</h4>
                        <div className="stat-value">{analytics.counts?.totalTransactions || 0}</div>
                    </div>
                </div>
            </div>

            <div className="card mt-4 p-4 shadow-sm" style={{ borderRadius: 'var(--radius-md)' }}>
                <h4 className="mb-3">Recent Transactions</h4>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Shop</th>
                            <th>Beneficiary</th>
                            <th>Items</th>
                        </tr>
                    </thead>
                    <tbody>
                        {analytics.recentTransactions?.map(t => (
                            <tr key={t._id}>
                                <td>{new Date(t.date).toLocaleDateString()}</td>
                                <td>{t.shopId?.shopName || 'N/A'}</td>
                                <td>{t.beneficiaryId?.firstname} {t.beneficiaryId?.lastname}</td>
                                <td>Rice: {t.itemsDistributed?.rice || 0}kg, Wheat: {t.itemsDistributed?.wheat || 0}kg</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;