import React from 'react';
import { NavLink } from 'react-router-dom';

const commodities = [
    { name: 'RICE', hindi: 'तांदूळ', icon: '🌾', rate: 'Rs.20/kg', qty: '5 kg' },
    { name: 'SUGAR', hindi: 'साखर', icon: '🍬', rate: 'Rs.20/kg', qty: '5 kg' },
    { name: 'WHEAT', hindi: 'गहू', icon: '🌿', rate: 'Rs.20/kg', qty: '5 kg' },
    { name: 'OIL', hindi: 'तेल', icon: '🫗', rate: 'Rs.20/kg', qty: '5 kg' },
    { name: 'COARSE GRAINS', hindi: 'डाळ', icon: '🫘', rate: 'Rs.20/kg', qty: '5 kg' },
];

const Yellow = () => {
    return (
        <div className="page-container">
            <div className="page-header fade-in-up">
                <h1>
                    <span style={{
                        display: 'inline-block', width: 12, height: 12,
                        borderRadius: '50%', background: 'var(--ration-yellow)',
                        marginRight: 8
                    }}></span>
                    Yellow Ration Card
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
                    <li>Families having annual income up to Rs.15,000/- (Urban Area)</li>
                    <li>None of the members in the family should be a doctor, lawyer, architect or chartered accountant.</li>
                    <li>None of the members in the family should be professional tax payer, sales tax payer or income tax payer or eligible to pay such tax.</li>
                    <li>The family should not possess residential telephone.</li>
                    <li>The family should not possess four wheeler vehicle.</li>
                    <li>All the persons in the family should not hold total two hectare rain fed or one hectare semi-irrigated or 1/2 hectare irrigated land.</li>
                    <li>The Govt has taken decision to issue a BPL Ration Card on temporary Basis to all Bidi workers, all Pardhi & Kolhati community vide GR dated 9/9/2008.</li>
                    <li>The Govt has taken decision to issue a BPL Ration Card on temporary Basis to the Abandoned women vide GR dated 29/9/2008 & 21/2/2009.</li>
                    <li>The Govt has also taken decision to issue BPL Cards to ex-mill workers with provision that they will get benefit of food grains after distribution to regular BPL families and food grain available with shopkeeper.</li>
                </ul>
            </div>
        </div>
    );
};

export default Yellow;