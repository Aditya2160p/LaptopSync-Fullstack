import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
const Result = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const baseURL = "http://localhost:8080/api/Laptops"
    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchQuery)
        axios.get(`${baseURL}/bymodel/${searchQuery}`).then((response) => {
            setSearchResults(response.data);
        });
        console.log(searchResults)
    };

    return (
        <div className="container">
            <h1 style={{ color: "black" }}>Search Page</h1>
            <form onSubmit={handleSearch}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter search query"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="btn btn-primary" type="submit">
                        Search
                    </button>
                </div>
            </form>
            <>
                <table className="table table-bordered bg-dark">
                    <thead className="bg-dark text-white">
                        <tr>
                            <td>ID</td>
                            <td>model</td>
                            <td>brand</td>
                            <td>Processor</td>
                            <td>GPU</td>
                            <td>RAM and ROM</td>
                            <td>price</td>

                        </tr>
                    </thead>
                    {searchResults.map((obj) => {
                        return (
                            <tr key={obj.laptopid} style={{ color: 'white' }}>
                                <td>{obj.laptopid}</td>
                                <td>{obj.model}</td>
                                <td>{obj.brand}</td>
                                <td>{obj.processor}</td>
                                <td>{obj.gpu}</td>
                                <td>{obj.ramandrom}</td>
                                <td>{obj.price}</td>
                            </tr>
                        );
                    })}
                </table>
            </>
        </div>
    );
};

export default Result;