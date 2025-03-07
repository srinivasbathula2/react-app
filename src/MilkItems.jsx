import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import "./MilkItems.css"; // Import CSS for background styling

function MilkItems() {
  let milk = useSelector(state => state.products.milk || []); // Ensure fallback to empty array
  let dispatch = useDispatch();

  // Pagination State
  const perPage = 5; // Items per page
  const totalPages = Math.ceil(milk.length / perPage) || 1;
  const [pageNumber, setPageNumber] = useState(1);

  // Ensure valid page number
  const handleSetPage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPageNumber(newPage);
    }
  };

  // Calculate Items for Current Page
  const pageStartIndex = (pageNumber - 1) * perPage;
  const currentItems = milk.slice(pageStartIndex, pageStartIndex + perPage);

  return (
    <div className="milk-container"> {/* Apply background styling */}
      <div className="container my-5">
        <h1 className="milk-title text-center mb-4">🥛 Milk Items</h1>
        
        {/* Items List */}
        <ul className="row list-unstyled">
          {currentItems.length > 0 ? (
            currentItems.map((item, index) => (
              <li key={index} className="col-12 col-md-4 mb-4">
                <div className="card shadow-sm milk-card">
                  <img src={item.image} alt={item.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">₹{item.price}</p>
                    <button 
                      className="btn btn-success"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      🛒 Add to Cart
                    </button>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <p className="text-center alert alert-warning">⚠️ No Milk Items Available</p>
          )}
        </ul>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-3 d-flex justify-content-center">
            <button
              onClick={() => handleSetPage(pageNumber - 1)}
              className="btn btn-success mx-2"
              disabled={pageNumber === 1}
            >
              ⬅️ Previous
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
              className="btn btn-success mx-2"
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

export default MilkItems;
