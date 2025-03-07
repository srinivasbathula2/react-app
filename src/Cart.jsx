import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addpurchasedetails, clearcart, decrement, increment, remove } from "./Store";
import { motion } from "framer-motion"; 
import "bootstrap/dist/css/bootstrap.min.css";

function Cart() {
    let cartObjects = useSelector(state => state.cart);
    let dispatch = useDispatch();

    let totalAmount = cartObjects.reduce((sum, item) => sum + item.price * item.quantity, 0);

    let [showDiscount, setShowDiscount] = useState(false);
    let [discountPercentage, setDiscountPercentage] = useState(0);
    let [couponCode, setCouponCode] = useState("");
    let [couponDiscountPercentage, setCouponDiscountPercentage] = useState(0);
    let [showCoupon, setShowCoupon] = useState(false);

    let applyCouponDiscount = () => {
        switch (couponCode.toUpperCase()) {
            case 'COUPON10':
                setCouponDiscountPercentage(10);
                setShowCoupon(true);
                break;
            case 'COUPON20':
                setCouponDiscountPercentage(20);
                setShowCoupon(true);
                break;
            case 'COUPON30':
                setCouponDiscountPercentage(30);
                setShowCoupon(true);
                break;
            case 'COUPON40':
                setCouponDiscountPercentage(40);
                setShowCoupon(true);
                break;
            default:
                alert("Invalid coupon code");
                setCouponDiscountPercentage(0);
                setShowCoupon(false);
                break;
        }
        setCouponCode(""); // Clear input after applying
    };

    let discountAmount = (totalAmount * discountPercentage) / 100;
    let totalAfterDiscount = totalAmount - discountAmount;
    let couponDiscountAmount = (totalAfterDiscount * couponDiscountPercentage) / 100;
    let finalAmount = totalAfterDiscount - couponDiscountAmount;

    let completePurchase = () => {
        if (cartObjects.length === 0) {
            alert("Your cart is empty!");
            return;
        }
    
        const purchaseDate = new Date().toLocaleDateString();
        const purchaseTime = new Date().toLocaleTimeString();
    
        let purchaseDetailsObject = {
            date: purchaseDate,
            time: purchaseTime,
            totalPrice: finalAmount,
            items: [...cartObjects],
        };
    
        dispatch(addpurchasedetails(purchaseDetailsObject));
        dispatch(clearcart());
    };
    return (
        <div className="container mt-5">
            {cartObjects.length > 0 ? (
                <motion.div 
                    className="card p-4 shadow-lg"
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-center text-primary">Shopping Cart 🛒</h2>
                    <ul className="list-group mb-3">
                        {cartObjects.map((item, index) => (
                            <motion.li 
                                key={index} 
                                className="list-group-item d-flex justify-content-between align-items-center"
                                initial={{ x: -100, opacity: 0 }} 
                                animate={{ x: 0, opacity: 1 }} 
                                exit={{ x: 100, opacity: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <div>
                                    <strong>{item.name}</strong> - ₹{item.price}
                                </div>
                                <div>
                                    <button className="btn btn-sm btn-success me-2" onClick={() => dispatch(increment(item))}>+</button>
                                    <span className="badge bg-secondary">{item.quantity}</span>
                                    <button className="btn btn-sm btn-warning ms-2 me-2" onClick={() => dispatch(decrement(item))}>-</button>
                                    <button className="btn btn-sm btn-danger" onClick={() => dispatch(remove(item))}>Remove</button>
                                </div>
                            </motion.li>
                        ))}
                    </ul>

                    <motion.h4 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 0.5 }}
                    >
                        Total Price: ₹{totalAmount}
                    </motion.h4>

                    {showDiscount && (
                        <motion.div 
                            className="alert alert-success"
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            transition={{ duration: 0.3 }}
                        >
                            <p>Discount Applied: {discountPercentage}%</p>
                            <p>Discount Amount: ₹{discountAmount}</p>
                        </motion.div>
                    )}

                    <motion.h5 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 0.5 }}
                    >
                        Net Amount: ₹{finalAmount}
                    </motion.h5>

                    <div className="mb-3">
                        <motion.button 
                            className="btn btn-outline-primary me-2" 
                            onClick={() => { setDiscountPercentage(10); setShowDiscount(true); }} 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Apply 10%
                        </motion.button>
                        <motion.button 
                            className="btn btn-outline-primary me-2" 
                            onClick={() => { setDiscountPercentage(20); setShowDiscount(true); }} 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Apply 20%
                        </motion.button>
                        <motion.button 
                            className="btn btn-outline-primary" 
                            onClick={() => { setDiscountPercentage(30); setShowDiscount(true); }} 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Apply 30%
                        </motion.button>
                    </div>

                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            value={couponCode} 
                            onChange={(e) => setCouponCode(e.target.value)} 
                            placeholder="Enter coupon code" 
                        />
                        <motion.button 
                            className="btn btn-info" 
                            onClick={applyCouponDiscount} 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Apply Coupon
                        </motion.button>
                    </div>

                    {showCoupon && (
                        <motion.div 
                            className="alert alert-warning"
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            transition={{ duration: 0.3 }}
                        >
                            <p>Coupon Discount: {couponDiscountPercentage}%</p>
                            <p>Coupon Discount Amount: ₹{couponDiscountAmount}</p>
                        </motion.div>
                    )}

                    <motion.button 
                        className="btn btn-success w-100" 
                        onClick={completePurchase}
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 0.5 }}
                    >
                        Complete Purchase
                    </motion.button>
                </motion.div>
            ) : (
                <motion.h3 
                    className="text-center text-danger"
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.5 }}
                >
                    Your Cart is Empty 🛍
                </motion.h3>
            )}
        </div>
    );
}

export default Cart;