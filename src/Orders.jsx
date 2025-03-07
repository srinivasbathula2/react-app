import React from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function Orders() {
    // Correctly accessing purchase details from Redux store
    const purchasedDetails = useSelector(state => state.purchasedetails) || [];

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">📜 Order History</h2>

            {/* Display message if there are no orders */}
            {purchasedDetails.length === 0 ? (
                <div className="alert alert-warning text-center" role="alert">
                    No orders placed yet. Start shopping! 🛍
                </div>
            ) : (
                <div className="row">
                    {purchasedDetails.map((order, index) => (
                        <div key={index} className="col-md-6 mb-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        🗓 Order Date:07-03-2025 <span className="text-primary">{order.purchasedate || "Unknown Date"}</span>
                                    </h5>
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        💰 Total Amount After Discount: ₹{order.totalPrice || 0}
                                    </h6>

                                    <h6 className="mt-3">📦 Items:</h6>
                                    <ul className="list-group">
                                        {order.items && order.items.length > 0 ? (
                                            order.items.map((item, idx) => (
                                                <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                                                    <span>
                                                        {item.name} - ₹{item.price} x {item.quantity}
                                                    </span>
                                                    <span className="badge bg-secondary">{item.quantity}</span>
                                                </li>
                                            ))
                                        ) : (
                                            <li className="list-group-item text-muted">No items found</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Orders;
