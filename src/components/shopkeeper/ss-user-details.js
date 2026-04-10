import React from 'react';

const users = [
    { name: 'Ramesh Kumar', cardType: 'Yellow', mobile: '9876543210', status: 'Active' },
    { name: 'Sita Devi', cardType: 'Saffron', mobile: '9876543211', status: 'Active' },
    { name: 'Mohan Patil', cardType: 'White', mobile: '9876543212', status: 'Pending' },
    { name: 'Priya Sharma', cardType: 'Yellow', mobile: '9876543213', status: 'Active' },
];

const cardColors = {
    Yellow: { bg: 'rgba(244, 196, 48, 0.12)', color: 'var(--warning)' },
    Saffron: { bg: 'rgba(255, 153, 51, 0.12)', color: 'var(--ration-saffron)' },
    White: { bg: 'rgba(255, 255, 255, 0.08)', color: 'var(--text-secondary)' },
};

const Ssuserdetails = () => {
    return (
        <div className="fade-in-up">
            <h2 className="section-title">User Details</h2>
            <div className="modern-table-container">
                <table className="modern-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Card Type</th>
                            <th>Mobile</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, i) => (
                            <tr key={i}>
                                <td style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{user.name}</td>
                                <td>
                                    <span style={{
                                        fontSize: '0.75rem', padding: '0.2rem 0.6rem',
                                        borderRadius: 'var(--radius-xl)', fontWeight: 600,
                                        background: cardColors[user.cardType]?.bg,
                                        color: cardColors[user.cardType]?.color
                                    }}>
                                        {user.cardType}
                                    </span>
                                </td>
                                <td>{user.mobile}</td>
                                <td>
                                    <span style={{
                                        fontSize: '0.75rem', padding: '0.2rem 0.6rem',
                                        borderRadius: 'var(--radius-xl)', fontWeight: 600,
                                        background: user.status === 'Active'
                                            ? 'rgba(44, 182, 125, 0.12)'
                                            : 'rgba(127, 90, 240, 0.12)',
                                        color: user.status === 'Active'
                                            ? 'var(--success)'
                                            : 'var(--info)'
                                    }}>
                                        {user.status}
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

export default Ssuserdetails;