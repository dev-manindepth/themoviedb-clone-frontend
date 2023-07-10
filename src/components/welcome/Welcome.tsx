import "./welcome.css";
const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome__container">
        <div className="welcome__container__heading">Welcome</div>
        <div className="welcome__container__subheading">
          Millions of movies, TV shows and people to discover. Explore now.
        </div>
        <div className="welcome__container__search">
          <div className="welcome__container__search__input">
            <input
              type="text"
              // placeholder="Search for a movie, tv show, person....."
              placeholder="Search..."
            />
            <div className="welcome__container__search__btn">Search</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
