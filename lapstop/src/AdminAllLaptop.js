import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
function AdminAllLaptop() {
  const baseURL = "http://localhost:8080/api/Laptops";
  const [laps, setLaps] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    fetchlaps();
  }, [currentPage, pageSize]);

  const fetchlaps = () => {
    axios.get(`${baseURL}/pagingLaptop/${currentPage}/${pageSize}`)
      .then((response) => {
        setLaps(response.data.content);
      })
      .catch((error) => {
        console.error("Error fetching laps", error);
      });
  };

  const handleDelete = (laptopid) => {
    axios.delete(`${baseURL}/delete/${laptopid}`)
      .then((res) => {
        console.log(res);
        fetchlaps(); 
      })
      .catch((error) => {
        console.error("Error deleting car", error);
      });
  };

  const goToPreviousPage = () => {
    if (currentPage >0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <table className="table table-bordered">
        {/* Table headers */}
        <thead className="bg-dark text-white">
          <tr>
            <th>ID</th>
            <th>Model</th>
            <th>brand</th>
            <th>Price</th>
            <th>processor</th>
            <th>GPU</th>
            <th>RAM/ROM</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {laps.map((obj) => (
            <tr key={obj.laptopid}>
              <td>{obj.laptopid}</td>
              <td>{obj.model}</td>
              <td>{obj.brand}</td>
              <td>{obj.price}</td>
              <td>{obj.processor}</td>
              <td>{obj.gpu}</td>
              <td>{obj.ramandrom}</td>
              <td>
                <a href={`/EditLaptop/${obj.laptopid}`} className="btn btn-success">
                  Edit
                </a>
                <button onClick={() => handleDelete(obj.laptopid)} className="btn btn-danger">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-buttons">
        <button onClick={goToPreviousPage} disabled={currentPage === 0}>
          Previous Page
        </button>
        <button onClick={goToNextPage}>Next Page</button>
      </div>
    </>
  );
}

export default AdminAllLaptop;
