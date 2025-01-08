import React, { useState } from "react";

const Navbar = ({ handleQuery }) => {
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const onNewChange = (clickSearch) => {
    handleQuery(clickSearch);
  };
  const handleReload = () => {
    window.location.reload(true);
  };
  return (
    <div className="mb-8">
      <div className="flex items-center justify-around w-full sm:h-16 asm:h-10 bg-blue-200">
        <div
          className="sm:text-2xl font-bold asm:text-lg cursor-pointer"
          onClick={handleReload}
        >
          NewsWorld
        </div>
        <div className="flex items-center justify-between sm:gap-4 asm:gap-3">
          <input
            onChange={(e) => {
              handleInput(e);
            }}
            value={search}
            className="sm:h-8 sm:w-60 text-md sm:px-2 sm:py-1 asm:h-6 asm:w-32 asm:px-1 asm:py-1"
            placeholder="Search News"
            type="text"
          />
          <button
            className="bg-blue-600 text-white py-1 px-3 rounded asm:text-sm"
            onClick={() => onNewChange(search)}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex items-center justify-around max-w-[1170px] mx-auto mt-5">
        <div
          className="sm:w-32 asm:text-sm sm:text-lg text-center rounded px-[4px] py-[2px] font-semibold bg-red-400 text-white cursor-pointer"
          onClick={() => onNewChange("sports")}
        >
          Sports
        </div>
        <div
          className="sm:w-32 asm:w-20 asm:text-sm sm:text-lg text-center rounded px-[4px] py-[2px] font-semibold bg-red-400 text-white cursor-pointer"
          onClick={() => onNewChange("politics")}
        >
          Politics
        </div>
        <div
          className="sm:w-32 asm:w-20 asm:text-sm sm:text-lg text-center rounded px-[4px] py-[2px] font-semibold bg-red-400 text-white cursor-pointer"
          onClick={() => onNewChange("health")}
        >
          Health
        </div>
        <div
          className="sm:w-32 asm:w-20 asm:text-sm sm:text-lg text-center rounded px-[4px] py-[2px] font-semibold bg-red-400 text-white cursor-pointer"
          onClick={() => onNewChange("Entertainment")}
        >
          Entertain
        </div>
        <div
          className="sm:w-32 asm:w-20 asm:text-sm sm:text-lg text-center rounded px-[4px] py-[2px] font-semibold bg-red-400 text-white cursor-pointer"
          onClick={() => onNewChange("technology")}
        >
          Tech
        </div>
      </div>
    </div>
  );
};

export default Navbar;
