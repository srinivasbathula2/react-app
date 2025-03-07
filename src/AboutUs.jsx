import "bootstrap/dist/css/bootstrap.min.css";

function AboutUs() {
    return (
        <div className="container mt-5">
            <div className="text-center">
                <h2 className="fw-bold mb-4">About Fresh Mart</h2>
                <p className="lead text-muted">
                    Welcome to <strong>Fresh Mart</strong>, your one-stop destination for high-quality groceries, fresh produce, 
                    and dairy products. Our mission is to provide fresh, organic, and sustainable food choices to our customers.
                </p>
            </div>

            <div className="row mt-5">
                {/* Our Mission Section */}
                <div className="col-md-6">
                    <h4 className="fw-bold">🌱 Our Mission</h4>
                    <p>
                        At My Mart, we are committed to delivering farm-fresh and locally sourced products while ensuring 
                        affordability and quality. We believe in sustainability, supporting local farmers, and reducing 
                        environmental impact.
                    </p>
                </div>

                {/* Why Choose Us Section */}
                <div className="col-md-6">
                    <h4 className="fw-bold">🔎 Why Choose Us?</h4>
                    <ul className="list-unstyled">
                        <li>✅ 100% Fresh & Organic Products</li>
                        <li>✅ Competitive Prices & Great Offers</li>
                        <li>✅ Hassle-Free Online Shopping</li>
                        <li>✅ Fast & Reliable Home Delivery</li>
                    </ul>
                </div>
            </div>

           
        </div>
    );
}

export default AboutUs;