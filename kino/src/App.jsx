import Navbar from "./components/Header/Navbar";
import './index.css'
import Slider from "./components/Slider/Slider";
import Search from './components/Search/Search'
import Movie from './components/movie/Movie'
import React, { useState } from "react";

function App() {
  function API_URL(search) {
    return `https://www.omdbapi.com/?s=${search}&apikey=d0049fb9`;
  }

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(API_URL(search));
    const data = await response.json();
    setMovies(data?.Search ?? []);
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Navbar />

      <div className='flex items-center justify-center w-full flex-col '>
        <Search value={search} onChange={handleInputChange} onSubmit={handleSubmit} />
      </div>

      {movies.length > 0 ? (
        <div>
          {movies.map((movie, key) => <Movie key={key} {...movie} />)}
        </div>
      ) : (
        <p className='absolute bottom-0'>Film Tapilmadi!</p>
      )}
      <Slider />
    </>
  );
}

export default App;
