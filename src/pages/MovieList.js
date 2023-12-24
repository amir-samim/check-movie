import { useEffect, useState } from "react";
import { Card, SkeletonCard } from "../components/index/index";
import axios from "axios";
export const MovieList = ({ sort }) => {
  const url = `https://api.themoviedb.org/3/movie/${sort}?api_key=5517575dbc7bcbe749dc1ee5a5c97020`;

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const result = response.data.results;
      console.log(result);
      setLoading(false);

      setMovies(result);
    } catch (error) {
      console.error("خطا در دریافت اطلاعات:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return (
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
  );
};
