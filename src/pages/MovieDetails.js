import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Language } from "../components/Language";
import NotFound from "../assets/images/not-found.png";
import { DetailSkeleton } from "../components/index/index";

export const MovieDetails = ({ setsearchGenre, setSearchGenreName }) => {
  const { id } = useParams();

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=5517575dbc7bcbe749dc1ee5a5c97020`;

  const [movie, setMovie] = useState([]);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);


  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const result = response.data;
      setMovie(result);
      console.log(result);
      setLoading(false)
    } catch (error) {
      console.error("خطا در دریافت اطلاعات:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const posterUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <section className="flex justify-center flex-wrap py-5 mx-4 lg:mx-0">
      {loading ? (<DetailSkeleton />):
        (<div className="flex justify-center flex-wrap">
          <div className="max-w-sm lg:mr-20">
            <img
              className="image rounded-lg"
              src={posterUrl}
              alt={movie.original_title + "poster"}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = NotFound;
              }}
            />
          </div>
          <div className="max-w-2xl">
            <div className="mb-4 text-base lg:text-lg flex flex-wrap justify-center lg:justify-normal">
              <div className="flex items-center text-gray-900 dark:text-gray-50 text-3xl my-4 font-bold">
                <h1>{movie.original_title}</h1>
                <div className="mx-2 flex items-center flex-wrap">
                  {movie.spoken_languages &&
                    movie.spoken_languages.map((language) => (
                      <Language language={language} />
                    ))}
                </div>
              </div>
              <p className=" text-gray-700 dark:text-gray-200">
                {movie.overview}
              </p>
            </div>
            <div className="flex flex-wrap text-gray-700 dark:text-gray-200 mb-6">
              {movie.genres &&
                movie.genres.map((genre) => {
                  return (
                    <span
                      onClick={() => {
                        setsearchGenre(genre.id);
                        setSearchGenreName(genre.name);
                        navigate("/movie/search");
                      }}
                      key={genre.id}
                      className="cursor-pointer p-2 border rounded dark:border-gray-600 mr-2 mt-2 border-gray-400"
                    >
                      {genre.name}
                    </span>
                  );
                })}
            </div>{" "}
            <div className="flex items-center my-4 dark:text-gray-200 text-gray-700 text-base">
              <i className="bi bi-star-fill text-yellow-500 text-sm"></i>
              <span className="ml-3">{movie.vote_average}</span>
              <i className="bi bi-dot text-gray-600"></i>
              <span>{parseInt(movie.vote_count).toLocaleString()} reviews</span>
            </div>
            <div className="dark:text-gray-200 text-gray-700">
              <p className="mb-2">
                <span className="font-bold mr-1.5">Runtime: </span>
                <span>{movie.runtime}min</span>
              </p>
              <p className="mb-2">
                <span className="font-bold mr-1.5">Budget: </span>
                <span>{parseInt(movie.budget).toLocaleString()}$</span>
              </p>
              <p className="mb-2">
                <span className="font-bold mr-1.5">Revenue: </span>
                <span>{parseInt(movie.revenue).toLocaleString()}$</span>
              </p>
              <p className="mb-2">
                <span className="font-bold mr-1.5">Release Date: </span>
                <span>{movie.release_date}</span>
              </p>
              {/* <p className="mb-2">
            <span className="font-bold mr-1.5">IMDB Code:</span>
            <span>{movie.imdb_id}</span>
          </p> */}
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://www.imdb.com/title/${movie.imdb_id}/`}
                className="mt-8 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                imdb page
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
