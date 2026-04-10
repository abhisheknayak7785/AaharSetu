import axios from 'axios';
import React, { useState, useEffect } from 'react';

const AdminShopkeeperDetails = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/admin/admin-shopkeeper-details/")
            .then(res => setUsers(res.data))
            .catch(err => console.log(err));
    }, []);

    const deleteUser = (id) => {
        axios.delete('http://localhost:5000/admin/admin-shopkeeper-details/' + id)
            .then(res => console.log(res.data));
        setUsers(users.filter(el => el._id !== id));
    };

    return (
        <div className="fade-in-up">
            <h2 className="section-title">Shopkeeper Details</h2>
            <div className="modern-table-container">
                <table className="modern-table">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Reg. Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? users.map(user => (
                            <tr key={user._id}>
                                <td style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{user.username}</td>
                                <td>{user.firstname} {user.lastname}</td>
                                <td>{user.email}</td>
                                <td>{user.dob ? user.dob.substring(0, 10) : '—'}</td>
                                <td>
                                    <button className="btn-danger-outline" onClick={() => deleteUser(user._id)}>
                                        <span className="material-icons-round" style={{fontSize: '0.9rem'}}>delete</span>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="5" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                                    No shopkeepers found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminShopkeeperDetails;