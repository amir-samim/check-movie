import { AllRoutes } from "../pages/index/AllRoutes";
import { Footer, Header } from "../components/index/index";
import "./App.css";
import { useEffect, useState } from "react";

export const App = () => {
  const initialSearchGenre =
    JSON.parse(localStorage.getItem("searchGenre")) || null;

  const [searchGenre, setSearchGenre] = useState(initialSearchGenre);

  useEffect(() => {
    localStorage.setItem("searchGenre", JSON.stringify(searchGenre));
  }, [searchGenre]);

  const initialSearchedWord =
    JSON.parse(localStorage.getItem("searchedWord")) || "";

  const [searchedWord, setSearchedWord] = useState(initialSearchedWord);

  useEffect(() => {
    localStorage.setItem("searchedWord", JSON.stringify(searchedWord));
  }, [searchedWord]);

  return (
    <div className="bg-white dark:bg-slate-800">
      <Header
        searchedWord={searchedWord}
        setSearchedWord={setSearchedWord}
        searchGenre={searchGenre}
        setSearchGenre={setSearchGenre}
      />

      <AllRoutes
        searchGenre={searchGenre}
        setSearchGenre={setSearchGenre}
        searchedWord={searchedWord}
        setSearchedWord={setSearchedWord}
      />

      <Footer />
    </div>
  );
};
