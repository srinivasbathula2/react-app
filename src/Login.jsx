import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";


function Login() {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        const username = usernameRef.current.value.trim();
        const password = passwordRef.current.value.trim();

        if (username === "Shivani" && password === "Shivani@123") {
            dispatch(login(username));
            navigate("/home");
        } else {
            alert("Invalid credentials. Please try again!");
        }
    };

    return (
        <div className="container mt-5">
            <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "400px" }}>
                <h2 className="text-center mb-4">Login Page</h2>

                <div className="mb-3">
                    <label className="form-label">Username:</label>
                    <input 
                        type="text" 
                        ref={usernameRef} 
                        className="form-control" 
                        placeholder="Enter Username" 
                        required 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input 
                        type="password" 
                        ref={passwordRef} 
                        className="form-control" 
                        placeholder="Enter Password" 
                        required 
                    />
                </div>

                <button className="btn btn-primary w-100" onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;