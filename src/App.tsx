import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { useEffect } from "react";
import { PageMeta, generateSEOHeaders } from "./utils/generateSEO";

function App() {
  useEffect(() => {
    const movieMeta: PageMeta = {
      title: "Movie App - Discover New Movies",
      description:
        "Explore a wide range of movies and find your new favorites.",
      keywords: ["movies", "films", "cinema", "entertainment"],
    };

    generateSEOHeaders(movieMeta);
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
