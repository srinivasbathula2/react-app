import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Home.css"; // Import external CSS for better management

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center justify-content-center text-center">
        <div className="container">
          <h1 className="display-4 fw-bold text-balck">Welcome to Fresh Mart 🛒</h1>
          <p className="lead text-dark-bold">Your One-Stop Online Grocery Store</p>
          <Link to="/veg" className="btn btn-lg btn-primary">Shop Now</Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container text-center my-5">
        <h2 className="fw-bold mb-4">Shop by Category</h2>
        <div className="row">
          {/* Veg Items */}
          <div className="col-md-4">
            <div className="card">
              <img src="public/fruits-and-vegetables_0.jpg" className="card-img-top" alt="Veg" />
              <div className="card-body">
                <h5 className="card-title">Vegetables 🥕</h5>
                <Link to="/veg" className="btn btn-success">Explore</Link>
              </div>
            </div>
          </div>
          {/* Non-Veg Items */}
          <div className="col-md-4">
            <div className="card">
              <img src="public/nonveg.jpeg" className="card-img-top" alt="Non-Veg" />
              <div className="card-body">
                <h5 className="card-title">Non-Veg 🍗</h5>
                <Link to="/nonveg" className="btn btn-danger">Explore</Link>
              </div>
            </div>
          </div>
          {/* Milk Items */}
          <div className="col-md-4">
            <div className="card">
              <img src="public/milkitems.jpeg" className="card-img-top" alt="Milk" />
              <div className="card-body">
                <h5 className="card-title">Dairy & Milk 🥛</h5>
                <Link to="/milk" className="btn btn-primary">Explore</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
