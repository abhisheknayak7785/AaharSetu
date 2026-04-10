import React, { useState } from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import Ssprofile from './shopkeeper/ssprofile';
import Ssstockdetails from './shopkeeper/ss-stock-details';
import Ssuserdetails from './shopkeeper/ss-user-details';
import Ssdashboard from './shopkeeper/ss-dashboard';

const Shopkeeper = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className="dashboard-layout">
            <aside className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
                <div className="sidebar-header">Shopkeeper Panel</div>
                <nav className="sidebar-nav">
                    <NavLink to="/shopkeeper/ssprofile" className="sidebar-link" activeClassName="active">
                        <span className="material-icons-round">person</span>
                        Profile
                    </NavLink>
                    <NavLink to="/shopkeeper/ssdashboard" className="sidebar-link" activeClassName="active">
                        <span className="material-icons-round">dashboard</span>
                        Dashboard
                    </NavLink>
                    <NavLink to="/shopkeeper/ssstockdetails" className="sidebar-link" activeClassName="active">
                        <span className="material-icons-round">inventory_2</span>
                        Stock Details
                    </NavLink>
                    <NavLink to="/shopkeeper/ssuserdetails" className="sidebar-link" activeClassName="active">
                        <span className="material-icons-round">group</span>
                        User Details
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
                        <Route exact path="/shopkeeper"><Redirect to="/shopkeeper/ssprofile" /></Route>
                        <Route path="/shopkeeper/ssprofile" component={Ssprofile} />
                        <Route path="/shopkeeper/ssstockdetails" component={Ssstockdetails} />
                        <Route path="/shopkeeper/ssuserdetails" component={Ssuserdetails} />
                        <Route exact path="/shopkeeper/ssdashboard" component={Ssdashboard} />
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Shopkeeper;