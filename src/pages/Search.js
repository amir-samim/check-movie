import React, { useEffect, useState } from "react";
import { Card, SkeletonCard } from "../components/index/index";
import axios from "axios";

export const Search = ({ searchedWord, searchGenre, searchGenreName }) => {
  let url;

  if (searchGenre !== null) {
    url = `https://api.themoviedb.org/3/discover/movie?api_key=5517575dbc7bcbe749dc1ee5a5c97020&with_genres=${searchGenre}`;
  } else {
    url = `https://api.themoviedb.org/3/search/movie?api_key=5517575dbc7bcbe749dc1ee5a5c97020&query=${searchedWord}`;
  }

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const result = response.data.results;
      setMovies(result);
      setLoading(false);
    } catch (error) {
      console.error("خطا در دریافت اطلاعات:", error);
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchedWord, searchGenre]);

  return (
    <div>
      <h1 className="text-gray-700 dark:text-gray-300 flex justify-center lg:justify-start text-2xl lg:text-3xl lg:ml-7 my-4 font-bold">
        <span>result for: </span>
        <span className="ml-2 text-gray-500 dark:text-gray-400">
          <i>
            {searchGenre === null ? (
              <span className="underline">{searchedWord}</span>
            ) : (
              searchGenreName
            )}
          </i>
        </span>
      </h1>
      <div className="flex flex-wrap justify-center items-center mb-10">
        {loading ? (
          <div className="flex flex-wrap justify-center items-center mb-10">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : (
          movies.map((movie) => <Card key={movie.id} movie={movie} />)
        )}
      </div>
    </div>
  );
};
