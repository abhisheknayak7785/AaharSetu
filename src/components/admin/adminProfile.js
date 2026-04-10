import React from 'react';

const AdminProfile = () => {
    return (
        <div className="fade-in-up">
            <h2 className="section-title">Profile</h2>
            <div className="profile-card">
                <div className="profile-avatar">
                    <span className="material-icons-round">admin_panel_settings</span>
                </div>
                <h3>Administrator</h3>
                <p className="profile-role">System Admin</p>
                <div style={{ marginTop: '1.5rem', textAlign: 'left' }}>
                    <div style={{
                        display: 'flex', justifyContent: 'space-between',
                        padding: '0.75rem 0', borderBottom: '1px solid var(--border-color)',
                        fontSize: '0.9rem'
                    }}>
                        <span style={{ color: 'var(--text-muted)' }}>Role</span>
                        <span>Admin</span>
                    </div>
                    <div style={{
                        display: 'flex', justifyContent: 'space-between',
                        padding: '0.75rem 0', borderBottom: '1px solid var(--border-color)',
                        fontSize: '0.9rem'
                    }}>
                        <span style={{ color: 'var(--text-muted)' }}>Access Level</span>
                        <span>Full Access</span>
                    </div>
                    <div style={{
                        display: 'flex', justifyContent: 'space-between',
                        padding: '0.75rem 0',
                        fontSize: '0.9rem'
                    }}>
                        <span style={{ color: 'var(--text-muted)' }}>Status</span>
                        <span style={{ color: 'var(--success)' }}>● Active</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;