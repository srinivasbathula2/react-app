import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
    const [count, setCount] = useState(5); // Countdown from 5 seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => prev - 1);
        }, 1000);

        // Redirect after 5 seconds
        const redirectTimer = setTimeout(() => {
            navigate("/home");
        }, 5000);

        // Cleanup timers when component unmounts
        return () => {
            clearInterval(timer);
            clearTimeout(redirectTimer);
        };
    }, [navigate]);

    return (
        <div className="text-center mt-5">
            <h1>404 - Page Not Found</h1>
            <p>Redirecting to home in <strong>{count}</strong> seconds...</p>
            <img src="404-error-template-19.png" alt="404 Not Found" width="400" />
        </div>
    );
}
export default NotFound;