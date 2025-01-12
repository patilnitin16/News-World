import React, { useEffect, useState } from "react";

const Newspage = ({ newQuery }) => {
  const [query, setQuery] = useState("india");
  const [news, setNews] = useState([]);

  const apiCall = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&language=en&${import.meta.env.VITE_NEWS_API}`
    );
    const finalNews = await response.json();
    setNews(finalNews.articles);
  };
  useEffect(() => {
    if (newQuery) {
      setQuery(newQuery);
    }
  }, [newQuery]);

  useEffect(() => {
    apiCall();
  }, [query]);
  return (
    <div className="max-w-[1170px] mx-auto grid md:grid-cols-3 gap-4 sm:grid-cols-2 asm:grid-cols-1 justify-center items-center">
      {news.map((elem, idx) => {
        if (elem.author !== null) {
          return (
            <div
              key={idx}
              className="flex flex-col gap-3 md:max-w-96 max-h-80 p-2 overflow-hidden shadow-xl asm:w-full"
            >
              <img
                src={elem.urlToImage}
                className="h-56 w-[370px] asm:w-full"
              />
              <h2 className="font-bold text-sm h-20 overflow-hidden">
                {elem.title}
              </h2>
              <button className="bg-blue-500 text-white py-1 px-3 rounded w-24">
                <a href={elem.url}>Read</a>
              </button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Newspage;
