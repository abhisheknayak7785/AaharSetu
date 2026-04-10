import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero-section">
                <h1 className="hero-title fade-in-up">
                    Tricolour Ration Cards<br />
                    <span className="gradient-text">Distribution System</span>
                </h1>
                <p className="hero-subtitle fade-in-up fade-in-up-delay-1">
                    Ensuring transparent and efficient distribution of essential commodities 
                    to every citizen through a digital-first approach.
                </p>

                {/* Stats */}
                <div className="stats-row fade-in-up fade-in-up-delay-2">
                    <div className="stat-item">
                        <div className="stat-number">3</div>
                        <div className="stat-label">Card Categories</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">5+</div>
                        <div className="stat-label">Commodities</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">100%</div>
                        <div className="stat-label">Transparency</div>
                    </div>
                </div>
            </section>

            {/* Ration Cards Grid */}
            <div className="page-container">
                <h2 className="section-title">Ration Card Categories</h2>
                <div className="card-grid card-grid-3">
                    <NavLink to="/white" className="ration-card white fade-in-up">
                        <span className="card-badge">White</span>
                        <h3 className="card-title">White Ration Card</h3>
                        <p className="card-desc">
                            शिधापत्रिका — White Ration card benefits, allocation details, 
                            ration details and detailed analysis.
                        </p>
                        <span className="card-action">
                            View Details <span className="material-icons-round" style={{fontSize: '1rem'}}>arrow_forward</span>
                        </span>
                    </NavLink>

                    <NavLink to="/saffron" className="ration-card saffron fade-in-up fade-in-up-delay-1">
                        <span className="card-badge">Saffron</span>
                        <h3 className="card-title">Saffron Ration Card</h3>
                        <p className="card-desc">
                            शिधापत्रिका — Saffron Ration card benefits, allocation details, 
                            ration details and detailed analysis.
                        </p>
                        <span className="card-action">
                            View Details <span className="material-icons-round" style={{fontSize: '1rem'}}>arrow_forward</span>
                        </span>
                    </NavLink>

                    <NavLink to="/yellow" className="ration-card yellow fade-in-up fade-in-up-delay-2">
                        <span className="card-badge">Yellow</span>
                        <h3 className="card-title">Yellow Ration Card</h3>
                        <p className="card-desc">
                            शिधापत्रिका — Yellow Ration card benefits, allocation details, 
                            ration details and detailed analysis.
                        </p>
                        <span className="card-action">
                            View Details <span className="material-icons-round" style={{fontSize: '1rem'}}>arrow_forward</span>
                        </span>
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Home;