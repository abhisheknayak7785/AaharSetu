import React, { useState } from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import AdminProfile from './admin/adminProfile';
import AdminDashboard from './admin/adminDashboard';
import AdminComplaint from './admin/adminComplaint';
import AdminShopkeeperDetails from './admin/adminShopkeeperDetails';

const Admin = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className="dashboard-layout">
            <aside className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
                <div className="sidebar-header">Admin Panel</div>
                <nav className="sidebar-nav">
                    <NavLink to="/admin/admin-profile" className="sidebar-link" activeClassName="active">
                        <span className="material-icons-round">person</span>
                        Profile
                    </NavLink>
                    <NavLink to="/admin/admin-dashboard" className="sidebar-link" activeClassName="active">
                        <span className="material-icons-round">dashboard</span>
                        Dashboard
                    </NavLink>
                    <NavLink to="/admin/admin-shopkeeper-details" className="sidebar-link" activeClassName="active">
                        <span className="material-icons-round">store</span>
                        Shopkeeper Data
                    </NavLink>
                    <NavLink to="/admin/admin-complaint" className="sidebar-link" activeClassName="active">
                        <span className="material-icons-round">feedback</span>
                        Complaints
                    </NavLink>
                    <NavLink to="/login" className="sidebar-link danger">
                        <span className="material-icons-round">logout</span>
                        Sign Out
                    </NavLink>
                </nav>
            </aside>

            <div className="dashboard-content">
                <div className="dashboard-topbar">
                    <button className="toggle-btn" onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
                        <span className="material-icons-round">{sidebarCollapsed ? 'menu' : 'menu_open'}</span>
                    </button>
                </div>

                <div className="dashboard-page">
                    <Switch>
                        <Route exact path="/admin/"><Redirect to="/admin/admin-profile" /></Route>
                        <Route path="/admin/admin-profile" component={AdminProfile} />
                        <Route path="/admin/admin-dashboard" component={AdminDashboard} />
                        <Route path="/admin/admin-shopkeeper-details" component={AdminShopkeeperDetails} />
                        <Route path="/admin/admin-complaint" component={AdminComplaint} />
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Admin;