import "./header.css";
import logo from "../../assets/logo.svg";
import { useEffect, useState } from "react";
import ProfileIcon from "../Icons/Profile";
import HamburgerMenuIcon from "../Icons/HamburgerMenu";
import LogoIcon from "../Icons/Logo";
import SearchIcon from "../Icons/Search";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
  const [hideHeader, setHideHeader] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState({
    movies: false,
    tv: false,
    people: false,
  });
  const [activeHamburgerMenu, setActiveHamburgerMenu] = useState(false);
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
      <div className="mobile__header__container">
        <div onClick={() => setActiveHamburgerMenu(!activeHamburgerMenu)}>
          <HamburgerMenuIcon width={24} height={24} fill="#fff" />
        </div>
        <LogoIcon width={60} height={40} fill="rgba(var(--lightBlue), 1)" />
        <div className="mobile__header__right__container">
          <ProfileIcon width={24} height={24} fill="#fff" />
          <SearchIcon width={24} height={24} fill="" />
        </div>
      </div>
      {activeHamburgerMenu && (
        <div className={`mobile__menu `}>
          <div className="mobile__menu__nav">
            <div
              className="mobile__menu__nav__header"
              onClick={() =>
                setActiveMobileMenu({
                  ...activeMobileMenu,
                  movies: !activeMobileMenu.movies,
                })
              }
            >
              Movies
            </div>
            {activeMobileMenu.movies && (
              <div className="mobile__menu__nav__movie-submenu">
                <Link to={`/movies/popular`}>Popular</Link>
                <Link to={`/movies/top`}>Top Rated</Link>
                <Link to={`/movies/upcoming`}>Upcoming</Link>
                <Link to={`/movies/playing`}>Now Playing</Link>
              </div>
            )}

            <div
              className="mobile__menu__nav__header"
              onClick={() =>
                setActiveMobileMenu({
                  ...activeMobileMenu,
                  tv: !activeMobileMenu.tv,
                })
              }
            >
              TV Shows
            </div>
            {activeMobileMenu.tv && (
              <div className="mobile__menu__nav__tv-submenu">
                <Link to={`/tv/popular`}>Popular</Link>
                <Link to={`/tv/top`}>Top Rated</Link>
                <Link to={`/tv/ontv`}>On TV</Link>
                <Link to={`/tv/playing`}>Airing Today</Link>
              </div>
            )}

            <div
              className="mobile__menu__nav__header"
              onClick={() =>
                setActiveMobileMenu({
                  ...activeMobileMenu,
                  people: !activeMobileMenu.people,
                })
              }
            >
              People
            </div>
            {activeMobileMenu.people && (
              <div className="mobile__menu__nav__people-submenu">
                <Link to={`/people/popular`}>Popular People</Link>
              </div>
            )}
          </div>
          <div className="mobile__menu__secondary">
            <Link to={`/`}>Contribution Bible</Link>
            <Link to={`/discussion`}>Discussions</Link>
            <Link to={`/leaderboard`}>Leaderboard</Link>
            <Link to={`/api`}>Api</Link>
            <Link to={`/support`}>Support</Link>
            <Link to={`/about`}>About</Link>
          </div>
          <div className="mobile__menu__login-btn">
            <Link to={`/login`}>Login</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
