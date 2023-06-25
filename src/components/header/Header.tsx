import "./header.css";
import logo from "../../assets/logo.svg";
import { useEffect, useState } from "react";
const Header: React.FC = () => {
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        if (window.scrollY > 64) {
          setHideHeader(true);
        } else {
          setHideHeader(false);
        }
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`header ${hideHeader ? "hidden" : ""}`}>
      <div className="header__container">
        <div className="header__container__left">
          <img src={logo} alt="logo" width={150} />
          <div>Movies</div>
          <div>TV Shows</div>
          <div>People</div>
          <div>More</div>
        </div>
        <div className="header__container__right">
          <div>Login</div>
          <div>Join TMDB</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
