import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { QRCodeSVG } from 'qrcode.react';

const BeneficiaryDashboard = () => {
    const [eligibility, setEligibility] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const [shopData, setShopData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Since credentials (cookies) are needed, we pass withCredentials
                const config = { withCredentials: true };
                
                const eligRes = await axios.get('http://localhost:5000/api/beneficiary/eligibility', config);
                setEligibility(eligRes.data);
                
                const shopRes = await axios.get('http://localhost:5000/api/beneficiary/shop-stock', config);
                setShopData(shopRes.data);

                const transRes = await axios.get('http://localhost:5000/api/beneficiary/transactions', config);
                setTransactions(transRes.data);

            } catch (error) {
                console.error("Error fetching beneficiary data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="text-center mt-5">Loading Dashboard...</div>;

    // Use user ID or token piece as a simulated secure payload for QR
    const qrPayload = JSON.stringify({ 
        type: 'RationCard', 
        cardType: eligibility?.rationCardType,
        timestamp: new Date().toISOString() 
    });

    return (
        <div className="container mt-4 fade-in-up">
            <h2>Beneficiary Dashboard</h2>
            <div className="row mt-4">
                
                {/* Digital Ration Card QR Component */}
                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm p-4 text-center" style={{ borderRadius: 'var(--radius-md)' }}>
                        <h4 className="mb-3">Digital Ration Card</h4>
                        <div className="d-flex justify-content-center mb-3">
                            <QRCodeSVG value={qrPayload} size={150} level={"H"} includeMargin={true} />
                        </div>
                        <p className="text-muted mb-1">Present this QR code to your assigned shop dealer.</p>
                        <span className="badge badge-primary p-2 mt-2" style={{ fontSize: '1rem' }}>
                            Type: {eligibility?.rationCardType || 'N/A'}
                        </span>
                    </div>
                </div>

                {/* Monthly Quota Tracker */}
                <div className="col-md-8 mb-4">
                    <div className="card shadow-sm p-4" style={{ borderRadius: 'var(--radius-md)', height: '100%' }}>
                        <h4>Monthly Quota Tracker</h4>
                        <p className="text-muted">Tracking your entitlements for the current month.</p>
                        
                        {['rice', 'wheat', 'sugar', 'kerosene'].map(item => {
                            const total = eligibility?.totalQuota?.[item] || 0;
                            const collected = eligibility?.collectedThisMonth?.[item] || 0;
                            if (total === 0) return null;
                            
                            const percent = Math.min((collected / total) * 100, 100);
                            const unit = item === 'kerosene' ? 'L' : 'kg';
                            
                            return (
                                <div key={item} className="mb-3">
                                    <div className="d-flex justify-content-between">
                                        <strong>{item.charAt(0).toUpperCase() + item.slice(1)}</strong>
                                        <span>{collected} / {total} {unit} collected</span>
                                    </div>
                                    <div className="progress" style={{ height: '10px' }}>
                                        <div 
                                            className="progress-bar bg-success" 
                                            role="progressbar" 
                                            style={{ width: `${percent}%` }}
                                            aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Assigned Shop Information */}
            {shopData && (
                <div className="row mt-2">
                    <div className="col-12 mb-4">
                        <div className="card shadow-sm p-4" style={{ borderRadius: 'var(--radius-md)' }}>
                            <h4>Assigned Shop: {shopData.shopName}</h4>
                            <p className="text-muted">Address: {shopData.address}</p>
                            <h5>Current Shop Stock:</h5>
                            <ul className="list-group list-group-horizontal flex-wrap">
                                <li className="list-group-item">Rice: {shopData.stock.rice} kg</li>
                                <li className="list-group-item">Wheat: {shopData.stock.wheat} kg</li>
                                <li className="list-group-item">Sugar: {shopData.stock.sugar} kg</li>
                                <li className="list-group-item">Kerosene: {shopData.stock.kerosene} L</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {/* Recent Transactions */}
            <div className="row mt-2">
                <div className="col-12 mb-4">
                    <div className="card shadow-sm p-4" style={{ borderRadius: 'var(--radius-md)' }}>
                        <h4>Recent Transactions</h4>
                        {transactions.length === 0 ? (
                            <p>No transactions found.</p>
                        ) : (
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Shop</th>
                                        <th>Items Collected</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactions.map(t => (
                                        <tr key={t._id}>
                                            <td>{new Date(t.date).toLocaleDateString()}</td>
                                            <td>{t.shopId?.shopName || 'Unknown Shop'}</td>
                                            <td>
                                                Rice: {t.itemsDistributed.rice || 0}kg ,
                                                Wheat: {t.itemsDistributed.wheat || 0}kg
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeneficiaryDashboard;
