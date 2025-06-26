import React from "react";
import "./styles.scss";

const Search = ({ searchInput, setSearchInput, onSearchInputValue }) => {
  return (
    <div className="search">
      <img
        className="search__icon-search"
        src="/image/icons/search.svg"
        alt="search"
      />
      {searchInput && (
        <img
          className="search__icon-remove"
          onClick={() => setSearchInput("")}
          src="/image/icons/close.svg"
          alt="close"
        />
      )}
      <input
        value={searchInput}
        onChange={onSearchInputValue}
        placeholder="Пошук..."
        type="text"
      />
    </div>
  );
};

export default Search;
