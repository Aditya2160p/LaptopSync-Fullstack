import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function EditLap() {
  const { laptopId } = useParams();
  const [car, setCar] = useState({});
  const baseURL = "http://localhost:8080/api/Laptops";

  useEffect(() => {
    axios.get(`${baseURL}/byid/${laptopId}`)
      .then((response) => {
        setCar(response.data);
      })
      .catch((error) => {
        console.error("Error retrieving car details", error);
      });
  }, [laptopId]);

  const [laptopid, setLaptopid] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [processor, setProcessor] = useState('');
  const [gpu, setGpu] = useState('');
  const [ramandrom, setRamandrom] = useState('');
  const nav = useNavigate()
  useEffect(() => {
    setLaptopid(car.laptopid || '');
    setBrand(car.brand || '');
    setModel(car.model || '');
    setPrice(car.price || '');
    setProcessor(car.processor || '');
    setGpu(car.gpu || '');
    setRamandrom(car.ramandrom || '');
  }, [car]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const LaptopData = {
      laptopid,
      brand,
      model,
      price,
      processor,
      gpu,
      ramandrom
    };
    console.log(LaptopData);

    axios.put(`${baseURL}/update`, LaptopData)
      .then((res) => {
        console.log(res);
        nav("/AdminallLap");
      })
      .catch((error) => {
        console.error("Error updating car details", error);
      });
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center">Car Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="laptopid" className="form-label">Laptop ID</label>
              <input
                type="text"
                className="form-control"
                id="laptopid"
                name="laptopid"
                value={laptopid}
                onChange={(e) => { setLaptopid(e.target.value) }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="brand" className="form-label">Brand</label>
              <input
                type="text"
                className="form-control"
                id="brand"
                name="brand"
                value={brand}
                onChange={(e) => { setBrand(e.target.value) }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="model" className="form-label">Model</label>
              <input
                type="text"
                className="form-control"
                id="model"
                name="model"
                value={model}
                onChange={(e) => { setModel(e.target.value) }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Price</label>
              <input
                type="text"
                className="form-control"
                id="price"
                name="price"
                value={price}
                onChange={(e) => { setPrice(e.target.value) }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="processor" className="form-label">Processor</label>
              <input
                type="text"
                className="form-control"
                id="processor"
                name="processor"
                value={processor}
                onChange={(e) => { setProcessor(e.target.value) }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="gpu" className="form-label">GPU</label>
              <input
                type="text"
                className="form-control"
                id="gpu"
                name="gpu"
                value={gpu}
                onChange={(e) => { setGpu(e.target.value) }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ram" className="form-label">RAM/ROM</label>
              <input
                type="text"
                className="form-control"
                id="ramandrom"
                name="ramandrom"
                value={ramandrom}
                onChange={(e) => { setRamandrom(e.target.value) }}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
