import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
const InputPage = () => {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [price, setPrice] = useState(0);
    const [processor, setProcessor] = useState('');
    const [gpu, setGpu] = useState('');
    const [ramandrom, setRamandrom] = useState('');
    const lap = { brand, model, price, processor, gpu, ramandrom }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:8080/api/Laptops/add', lap)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error)
            });
    };

    return (
        <div className="container">
            <h2>Product Details</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="brand">Brand</label>
                    <input
                        type="text"
                        className="form-control"
                        id="brand"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="model">Model</label>
                    <input
                        type="text"
                        className="form-control md"
                        id="model"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="processor">Processor</label>
                    <input
                        type="text"
                        className="form-control"
                        id="processor"
                        value={processor}
                        onChange={(e) => setProcessor(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="gpu">GPU</label>
                    <input
                        type="text"
                        className="form-control"
                        id="gpu"
                        value={gpu}
                        onChange={(e) => setGpu(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ram-rom">RAM & ROM</label>
                    <input
                        type="text"
                        className="form-control"
                        id="ram-rom"
                        value={ramandrom}
                        onChange={(e) => setRamandrom(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default InputPage;
