import React from "react";

const SearchInput = (props) => {
  const handleSearchTermChange = (event) => {
    props.setSearchTerm(event.target.value);
  };
  return (
    <form className="search-form">
      <input
        type="text"
        className="search"
        placeholder="Buscar..."
        onChange={handleSearchTermChange}
      />
    </form>
  );
};

export default SearchInput;
