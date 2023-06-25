import { Link } from "react-router-dom";
import "./error.css";
const Error = () => {
  return (
    <div className="global-error">
      <div className="global-error__content">
        <h2 className="global-error__title">Oops! An error occurred.</h2>
        <Link to="/" replace={true} className="global-error__reroute">
          Go to home
        </Link>
      </div>
    </div>
  );
};

export default Error;
