import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <nav className="footer-nav">
        <div className="join-container">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt="The Movie Database (TMDB)"
            width="130"
            height="94"
            loading="lazy"
            className="tmdb-footer-logo"
          />
          <Link className="join-btn-cta" to="/signup">
            Join the Community
          </Link>
        </div>
        <div className="footer-nav-link-container">
          <div>
            <h3>The Basics</h3>
            <ul>
              <li>
                <Link to="/about">About TMDB</Link>
              </li>
              <li>
                <Link to="/about/staying-in-touch">Contact Us</Link>
              </li>
              <li>
                <Link to="/talk">Support Forums</Link>
              </li>
              <li>
                <Link
                  to="https://developer.themoviedb.org/docs"
                  target="_blank"
                >
                  API
                </Link>
              </li>
              <li>
                <Link
                  to="https://status.themoviedb.org/"
                  target="_blank"
                  rel="noopener"
                >
                  System Status
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Get Involved</h3>
            <ul>
              <li>
                <Link to="/bible">
                  <span className="glyphicons glyphicons-asterisk"></span>{" "}
                  Contribution Bible
                </Link>
              </li>
              <li>
                <Link to="/movie/new">Add New Movie</Link>
              </li>
              <li>
                <Link to="/tv/new">Add New TV Show</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Community</h3>
            <ul>
              <li>
                <Link to="/documentation/community/guidelines">Guidelines</Link>
              </li>
              <li>
                <Link to="/discuss">Discussions</Link>
              </li>
              <li>
                <Link to="/leaderboard">Leaderboard</Link>
              </li>
              <li>
                <Link
                  to="https://twitter.com/themoviedb"
                  target="_blank"
                  rel="noopener"
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul>
              <li>
                <Link to="/documentation/website/terms-of-use">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/documentation/api/terms-of-use">
                  API Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
