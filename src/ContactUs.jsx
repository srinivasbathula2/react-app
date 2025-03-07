import "bootstrap/dist/css/bootstrap.min.css";

function ContactUs() {
    return (
        <div className="container mt-5">
            <div className="text-center">
                <h2 className="fw-bold mb-4">📞 Contact FreshMart</h2>
                <p className="lead text-muted">
                    Have any questions or need assistance? Our team is here to help! Feel free to reach out to us through any of the channels below.
                </p>
            </div>

            {/* Contact Information */}
            <div className="row mt-5">
                <div className="col-md-6 text-center">
                    <h4 className="fw-bold">📍 Our Address</h4>
                    <p>123 Fresh Street, Green Valley, India</p>
                </div>
                <div className="col-md-6 text-center">
                    <h4 className="fw-bold">📧 Email & Phone</h4>
                    <p>Email: <a href="mailto:support@freshmart.com">support@freshmart.com</a></p>
                    <p>Phone: +91 98765 43210</p>
                </div>
            </div>

            {/* Contact Form */}
            <div className="mt-5">
                <h4 className="fw-bold text-center">📝 Get in Touch</h4>
                <form className="mt-3 mx-auto" style={{ maxWidth: "600px" }}>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Full Name</label>
                        <input type="text" className="form-control" placeholder="Enter your name" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Email Address</label>
                        <input type="email" className="form-control" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Message</label>
                        <textarea className="form-control" rows="4" placeholder="Enter your message" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-danger w-100">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;