import React, { Suspense, useState } from "react";
import Navbar from "./Components/Navbar";
const Newspage = React.lazy(() => import("./Components/Newspage"));

const App = () => {
  const [query, setQuery] = useState("");

  const handleQuery = (newQuery) => {
    setQuery(newQuery);
  };
  return (
    <div>
      <Navbar handleQuery={handleQuery} />
      <Suspense fallback="Loading News......">
        <Newspage newQuery={query} />
      </Suspense>
      <footer className=" text-center my-4 border-t-2 flex items-center justify-center  ">
        <p>Copyright 2020-2025. @NewsWorld. All rights reserved</p>
      </footer>
    </div>
  );
};

export default App;
