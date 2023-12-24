import { Route, Routes } from "react-router-dom";
import { PageNotFound, MovieList, MovieDetails, Search } from "./index";
import { useState } from "react";

export const AllRoutes = ({ searchedWord, searchGenre, setSearchGenre }) => {
  const [searchGenreName, setSearchGenreName] = useState("");
  return (
    <main>
      <Routes>
        <Route path="" element={<MovieList sort="now_playing" />} />
        <Route path="movies/popular" element={<MovieList sort="popular" />} />
        <Route path="movies/top" element={<MovieList sort="top_rated" />} />
        <Route path="movies/upcoming" element={<MovieList sort="upcoming" />} />
        <Route
          path="movie/:id"
          element={
            <MovieDetails
              setsearchGenre={setSearchGenre}
              setSearchGenreName={setSearchGenreName}
            />
          }
        />
        <Route
          path="movie/search"
          element={
            <Search
              searchedWord={searchedWord}
              searchGenre={searchGenre}
              setsearchGenre={setSearchGenre}
              searchGenreName={searchGenreName}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};
