import { Link } from "react-router-dom";

function ErrorBoundary() {
    return (
        <>
            <h1>your entered wrong url
                <Link to={"/"} className="bg-blue-700">Click to go</Link>
            </h1>
        </>
    );
}
export default ErrorBoundary;