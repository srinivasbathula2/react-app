import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Veg.css"; // Import the CSS file for background image

function Veg() {  
    let veg = useSelector(state => state.products.veg || []); // Ensure veg is always an array
    let dispatch = useDispatch();

    // Pagination State
    const perPage = 5;
    const [pageNumber, setPageNumber] = useState(1);
    const totalPages = Math.ceil(veg.length / perPage) || 1;

    // Ensure page number stays within valid range
    useEffect(() => {
        setPageNumber(prev => Math.max(1, Math.min(prev, totalPages)));
    }, [totalPages]);

    // Calculate Items for Current Page
    const pageStartIndex = (pageNumber - 1) * perPage;
    const currentItems = veg.slice(pageStartIndex, pageStartIndex + perPage);

    return (
        <div className="veg-container"> {/* Apply background styling */}
            <div className="container mt-4 text-center">
                <h1 className="veg-title mb-4">🥦 Veg Items</h1>
                {/* Items List */}
                <div className="row justify-content-center">
                    {currentItems.length > 0 ? (
                        currentItems.map((item, index) => (
                            <div key={index} className="col-12 col-md-4 mb-4 d-flex justify-content-center">
                                <div className="card veg-card text-center">
                                    <img src={item.image} alt={item.name} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">💰 ${item.price}</p>
                                        <button 
                                            className="btn btn-success"
                                            onClick={() => dispatch(addToCart(item))}
                                        >
                                            🛒 Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center alert alert-warning">⚠️ No Veg Items Available</p>
                    )}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="mt-3 d-flex justify-content-center">
                        <button
                            onClick={() => setPageNumber(page => Math.max(1, page - 1))}
                            className="btn btn-primary mx-2"
                            disabled={pageNumber === 1}
                        >
                            ⬅️ Previous
                        </button>

                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => setPageNumber(index + 1)}
                                className={`btn ${pageNumber === index + 1 ? "btn-dark" : "btn-outline-dark"} mx-1`}
                            >
                                {index + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => setPageNumber(page => Math.min(totalPages, page + 1))}
                            className="btn btn-primary mx-2"
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

export default Veg;
