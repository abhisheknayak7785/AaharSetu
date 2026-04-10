import React from 'react';
import { NavLink } from 'react-router-dom';

const commodities = [
    { name: 'RICE', hindi: 'तांदूळ', icon: '🌾', rate: 'Rs.20/kg', qty: '5 kg' },
    { name: 'SUGAR', hindi: 'साखर', icon: '🍬', rate: 'Rs.20/kg', qty: '5 kg' },
    { name: 'WHEAT', hindi: 'गहू', icon: '🌿', rate: 'Rs.20/kg', qty: '5 kg' },
    { name: 'OIL', hindi: 'तेल', icon: '🫗', rate: 'Rs.20/kg', qty: '5 kg' },
    { name: 'COARSE GRAINS', hindi: 'डाळ', icon: '🫘', rate: 'Rs.20/kg', qty: '5 kg' },
];

const Saffron = () => {
    return (
        <div className="page-container">
            <div className="page-header fade-in-up">
                <h1>
                    <span style={{
                        display: 'inline-block', width: 12, height: 12,
                        borderRadius: '50%', background: 'var(--ration-saffron)',
                        marginRight: 8
                    }}></span>
                    Saffron Ration Card
                </h1>
                <div className="page-header-actions">
                    <button className="notification-btn">
                        <span className="material-icons-round" style={{fontSize: '1.1rem'}}>notifications</span>
                        <span className="notification-badge">9</span>
                    </button>
                    <NavLink to="/complaint" className="btn-danger-outline">
                        <span className="material-icons-round" style={{fontSize: '1rem'}}>report</span>
                        Complaint
                    </NavLink>
                </div>
            </div>

            <div className="card-grid card-grid-5 fade-in-up" style={{animationDelay: '0.1s'}}>
                {commodities.map((item, i) => (
                    <div className="commodity-card" key={i}>
                        <div className="commodity-icon">{item.icon}</div>
                        <div className="commodity-name">{item.name}</div>
                        <div className="commodity-name-hindi">{item.hindi}</div>
                        <div className="commodity-detail">
                            <span>Rate: <strong>{item.rate}</strong></span>
                            <span>Qty: <strong>{item.qty}</strong></span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="info-card fade-in-up" style={{animationDelay: '0.2s'}}>
                <h3>
                    <span className="material-icons-round">info</span>
                    Eligibility Requirements
                </h3>
                <ul>
                    <li>Families having annual income of Rs.15,001 to 1 lakh.</li>
                    <li>None of the members in the family should have four wheeler mechanical vehicles (excluding taxi).</li>
                    <li>The family in all should possess four hectare or more irrigated land.</li>
                </ul>
            </div>
        </div>
    );
};

export default Saffron;