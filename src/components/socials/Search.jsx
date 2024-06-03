import React from 'react';
import { useState } from 'react';

const Search = () => {
  const [search, setsearch] = useState('');
  const handleSearch = (e) => {
    return setsearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };
  return (
    <div className="search-wrapper border-[1px] border-[#2f3472]">
      <div className="search-n-btn-wrap flex justify-between">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          className="p-[1em] outline-none"
          placeholder="Search"
        />
        <button
          onClick={handleSearchSubmit}
          className="bg-[#2f3472] text-[white]"
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default Search;
