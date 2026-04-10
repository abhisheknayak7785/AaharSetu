import React from 'react';

const stockItems = [
    { name: 'Rice', hindi: 'तांदूळ', icon: '🌾', available: '50 kg', allocated: '120 kg', status: 'In Stock' },
    { name: 'Sugar', hindi: 'साखर', icon: '🍬', available: '30 kg', allocated: '80 kg', status: 'In Stock' },
    { name: 'Wheat', hindi: 'गहू', icon: '🌿', available: '45 kg', allocated: '100 kg', status: 'In Stock' },
    { name: 'Oil', hindi: 'तेल', icon: '🫗', available: '20 L', allocated: '60 L', status: 'Low Stock' },
    { name: 'Coarse Grains', hindi: 'डाळ', icon: '🫘', available: '35 kg', allocated: '90 kg', status: 'In Stock' },
];

const Ssstockdetails = () => {
    return (
        <div className="fade-in-up">
            <h2 className="section-title">Stock Details</h2>
            <div className="modern-table-container">
                <table className="modern-table">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Available</th>
                            <th>Allocated</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stockItems.map((item, i) => (
                            <tr key={i}>
                                <td style={{ fontWeight: 500, color: 'var(--text-primary)' }}>
                                    <span style={{ marginRight: 8 }}>{item.icon}</span>
                                    {item.name}
                                    <span style={{ color: 'var(--text-muted)', marginLeft: 6, fontSize: '0.8rem' }}>
                                        {item.hindi}
                                    </span>
                                </td>
                                <td><strong style={{ color: 'var(--accent-secondary)' }}>{item.available}</strong></td>
                                <td>{item.allocated}</td>
                                <td>
                                    <span style={{
                                        fontSize: '0.75rem', padding: '0.2rem 0.6rem',
                                        borderRadius: 'var(--radius-xl)', fontWeight: 600,
                                        background: item.status === 'In Stock'
                                            ? 'rgba(44, 182, 125, 0.12)'
                                            : 'rgba(244, 196, 48, 0.12)',
                                        color: item.status === 'In Stock'
                                            ? 'var(--success)'
                                            : 'var(--warning)'
                                    }}>
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Ssstockdetails;