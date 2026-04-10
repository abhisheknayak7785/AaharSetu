import React from 'react';

const AdminComplaint = () => {
    const complaints = [
        {
            from: 'Dnyaneshwar Sakhare',
            title: 'Got a Ration in higher price',
            desc: 'With supporting text below as a natural lead-in to additional content.',
        },
        {
            from: 'Ram Waghmode',
            title: 'Ration not given by shopkeeper',
            desc: 'With supporting text below as a natural lead-in to additional content.',
        },
    ];

    return (
        <div className="fade-in-up">
            <h2 className="section-title">Complaints</h2>
            {complaints.map((complaint, i) => (
                <div className="complaint-card" key={i}>
                    <div className="complaint-card-header">
                        <span className="complaint-from">
                            From: <strong>{complaint.from}</strong>
                        </span>
                        <span style={{
                            fontSize: '0.75rem', padding: '0.25rem 0.75rem',
                            background: 'rgba(244, 196, 48, 0.12)', color: 'var(--warning)',
                            borderRadius: 'var(--radius-xl)', fontWeight: 600
                        }}>
                            Pending
                        </span>
                    </div>
                    <h4>{complaint.title}</h4>
                    <p>{complaint.desc}</p>
                    <button className="btn-outline">
                        <span className="material-icons-round" style={{fontSize: '1rem'}}>check_circle</span>
                        Acknowledge
                    </button>
                </div>
            ))}
        </div>
    );
};

export default AdminComplaint;