import './welcome.css';
const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome__container">
        <div className="welcome__container__heading">Welcome</div>
        <div className="welcome__container__subheading">
          Millions of movies, TV shows and people to discover. Explore now.
        </div>
        <div className="welcome__container__search">
          <input
            type="text"
            className="welcome__container__search__container"
            placeholder="Search for a movie, tv show, person....."
          />
          <button className="welcome__container__search__container__btn">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default Welcome