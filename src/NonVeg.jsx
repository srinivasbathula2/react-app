import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store.js";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./NonVeg.css"; // Import CSS for background styling

function NonVeg() {
  const dispatch = useDispatch();
  const nonveg = useSelector((state) => state.products?.nonVeg || []); // Ensure fallback to empty array

  // Pagination State
  const perPage = 5;
  const totalPages = Math.ceil(nonveg.length / perPage) || 1;
  const [pageNumber, setPageNumber] = useState(1);

  // Ensure pageNumber remains valid
  const handleSetPage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPageNumber(newPage);
    }
  };

  // Calculate Items for Current Page
  const pageStartIndex = (pageNumber - 1) * perPage;
  const currentItems = nonveg.slice(pageStartIndex, pageStartIndex + perPage);

  return (
    <div className="nonveg-container"> {/* Apply background styling */}
      <div className="container mt-4 text-center">
        <h1 className="nonveg-title mb-4">🍗 Non-Veg Items</h1>
        {/* Items List */}
        <div className="row justify-content-center">
          {currentItems.length > 0 ? (
            currentItems.map((item, index) => (
              <div key={index} className="col-12 col-md-4 mb-4 d-flex justify-content-center">
                <div className="card shadow-sm text-center border-danger nonveg-card">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-danger">{item.name}</h5>
                    <p className="card-text fw-bold text-danger">₹{item.price}</p>
                    <button
                      className="btn btn-danger w-100"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      🛒 Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-danger">No non-veg products available</p>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-3 d-flex justify-content-center">
            <button
              onClick={() => handleSetPage(pageNumber - 1)}
              className="btn btn-danger mx-2"
              disabled={pageNumber === 1}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handleSetPage(index + 1)}
                className={`btn ${
                  pageNumber === index + 1 ? "btn-dark" : "btn-outline-dark"
                } mx-1`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => handleSetPage(pageNumber + 1)}
              className="btn btn-danger mx-2"
              disabled={pageNumber === totalPages}
            >
               Next ➡️
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NonVeg;
