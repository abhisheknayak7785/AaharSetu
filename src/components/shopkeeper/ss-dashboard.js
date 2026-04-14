import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Ssdashboard = () => {
    const [shop, setShop] = useState(null);
    const [loading, setLoading] = useState(true);
    const [beneficiaryId, setBeneficiaryId] = useState('');
    const [distQty, setDistQty] = useState({ rice: 0, wheat: 0, sugar: 0, kerosene: 0 });
    const [message, setMessage] = useState('');
    const [initForm, setInitForm] = useState({ shopName: '', address: '' });

    const fetchShop = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/shop/my-shop', { withCredentials: true });
            setShop(res.data);
        } catch (err) {
            setShop(null); // Not initialized yet probably
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchShop();
    }, []);

    const initializeShop = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/shop/initialize', initForm, { withCredentials: true });
            setShop(res.data);
        } catch (err) {
            setMessage(err.response?.data?.error || "Error initializing shop");
        }
    };

    const distributeRation = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            const payload = {
                beneficiaryId,
                itemsDistributed: distQty
            };
            await axios.post('http://localhost:5000/api/shop/distribute', payload, { withCredentials: true });
            setMessage("Ration distributed successfully!");
            fetchShop(); // Refresh stock
            setBeneficiaryId('');
            setDistQty({ rice: 0, wheat: 0, sugar: 0, kerosene: 0 });
        } catch (err) {
            setMessage(err.response?.data?.error || "Distribution failed");
        }
    };

    if (loading) return <div>Loading...</div>;

    if (!shop) {
        return (
            <div className="card shadow-sm p-4 mt-4" style={{ maxWidth: 500, margin: '0 auto' }}>
                <h4>Initialize Your Shop</h4>
                {message && <div className="alert alert-danger">{message}</div>}
                <form onSubmit={initializeShop}>
                    <div className="form-group mb-3">
                        <label>Shop Name</label>
                        <input type="text" className="form-control" required value={initForm.shopName} onChange={e => setInitForm({...initForm, shopName: e.target.value})} />
                    </div>
                    <div className="form-group mb-3">
                        <label>Address</label>
                        <input type="text" className="form-control" required value={initForm.address} onChange={e => setInitForm({...initForm, address: e.target.value})} />
                    </div>
                    <button type="submit" className="btn btn-primary">Setup Shop</button>
                </form>
            </div>
        );
    }

    return (
        <div className="container mt-4 fade-in-up">
            <h2 className="section-title">Shopkeeper Dashboard</h2>
            
            {message && <div className="alert alert-info">{message}</div>}

            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card shadow-sm p-4">
                        <h4>Shop Details</h4>
                        <p><strong>Name:</strong> {shop.shopName}</p>
                        <p><strong>Address:</strong> {shop.address}</p>
                        <hr />
                        <h5>Current Stock Inventory</h5>
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Rice <span className="badge badge-primary">{shop.stock.rice} kg</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Wheat <span className="badge badge-primary">{shop.stock.wheat} kg</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Sugar <span className="badge badge-primary">{shop.stock.sugar} kg</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Kerosene <span className="badge badge-primary">{shop.stock.kerosene} L</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-6 mb-4">
                    <div className="card shadow-sm p-4">
                        <h4>Distribute Ration</h4>
                        <p className="text-muted small">Scan QR or enter Beneficiary ID manually below.</p>
                        <form onSubmit={distributeRation}>
                            <div className="form-group mb-3">
                                <label>Beneficiary User ID (From QR Code)</label>
                                <input type="text" className="form-control" placeholder="Object ID" required value={beneficiaryId} onChange={e => setBeneficiaryId(e.target.value)} />
                            </div>
                            
                            <div className="row mb-3">
                                <div className="col-6 mb-2">
                                    <label>Rice (kg)</label>
                                    <input type="number" className="form-control" value={distQty.rice} onChange={e => setDistQty({...distQty, rice: Number(e.target.value)})} />
                                </div>
                                <div className="col-6 mb-2">
                                    <label>Wheat (kg)</label>
                                    <input type="number" className="form-control" value={distQty.wheat} onChange={e => setDistQty({...distQty, wheat: Number(e.target.value)})} />
                                </div>
                                <div className="col-6 mb-2">
                                    <label>Sugar (kg)</label>
                                    <input type="number" className="form-control" value={distQty.sugar} onChange={e => setDistQty({...distQty, sugar: Number(e.target.value)})} />
                                </div>
                                <div className="col-6 mb-2">
                                    <label>Kerosene (L)</label>
                                    <input type="number" className="form-control" value={distQty.kerosene} onChange={e => setDistQty({...distQty, kerosene: Number(e.target.value)})} />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success w-100">Confirm Distribution</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ssdashboard;