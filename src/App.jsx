import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom"; 
import Home from "./Home";
import Veg from "./Veg";
import MilkItems from "./MilkItems";
import Orders from "./Orders";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Cart from "./Cart";
import NonVeg from "./NonVeg"; // Removed .jsx extension for consistency
import NotFound from "./NotFound";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./Store";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Fixed Import
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <>
      <BrowserRouter>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 shadow-sm">
          <div className="container-fluid">
            <Link to="/home" className="navbar-brand">
              <i className="fa-solid fa-store"></i> FreshMart
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/home" className="nav-link text-white">
                    <i className="fa-solid fa-house"></i> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/veg" className="nav-link text-white">
                    <i className="fa-solid fa-carrot"></i> Veg
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/nonveg" className="nav-link text-white">
                    <i className="fa-solid fa-drumstick-bite"></i> Non-Veg
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/milk" className="nav-link text-white">
                    <i className="fa-solid fa-glass-water"></i> Milk Items
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/orders" className="nav-link text-white">
                    <i className="fa-solid fa-box"></i> Orders
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/aboutus" className="nav-link text-white">
                    <i className="fa-solid fa-circle-info"></i> About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contactus" className="nav-link text-white">
                    <i className="fa-solid fa-phone"></i> Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link text-white">
                    <i className="fa-solid fa-shopping-cart"></i> Cart
                    <span className="badge bg-warning ms-1">{totalItems}</span>
                  </Link>
                </li>
              </ul>

              {/* Authentication Section */}
              <div className="d-flex">
                {isAuthenticated ? (
                  <>
                    <span className="navbar-text text-white me-3">
                      <i className="fa-solid fa-user"></i> Welcome, {user}!
                    </span>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(logout())}
                    >
                      <i className="fa-solid fa-right-from-bracket"></i> Logout
                    </button>
                  </>
                ) : (
                  <Link to="/login" className="btn btn-outline-light">
                    <i className="fa-solid fa-right-to-bracket"></i> Sign In
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} /> {/* Redirect "/" to "/home" */}
            <Route path="/home" element={<Home />} />
            <Route path="/veg" element={<Veg />} />
            <Route path="/nonveg" element={<NonVeg />} />
            <Route path="/milk" element={<MilkItems />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
