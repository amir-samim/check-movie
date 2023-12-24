import { Link } from "react-router-dom";
import NotFound from "../assets/images/not-found.png";

export const Card = ({ movie }) => {
  const posterUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  const TruncatedText = (text, maxLength) => {
    const truncateText = (text, maxLength) => {
      if (text.split(" ").length > maxLength) {
        return text.split(" ").slice(0, maxLength).join(" ") + "...";
      }
      return text;
    };

    return (
      <p className="mb-3 text-base lg:text-lg font-normal text-gray-700 dark:text-gray-400">
        {truncateText(text, maxLength)}
      </p>
    );
  };

  return (
    <div className=" relative cart m-4 max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/movie/${movie.id}`}>
          <img
            className="image rounded-t-lg"
            src={posterUrl}
            alt={movie.original_title + "poster"}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = NotFound;
            }}
          />
      </Link>
      <div className="p-5">
        <Link to={`/movie/${movie.id}`}>
          <h5 className="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {movie.original_title}
          </h5>
        </Link>
        <span className="border rounded text-base px-1 text-gray-700 dark:text-gray-200 dark:border-gray-600 border-gray-400 font-normal">
          {movie.release_date ? movie.release_date.slice(0, 4) : "----"}
        </span>
        <div className="mt-2">{TruncatedText(movie.overview, 15)}</div>
      </div>
    </div>
  );
};