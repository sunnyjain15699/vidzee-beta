import React from "react";

const Search = (props) => {
  return (
    <div id="search" className="Search">
      <input
        onKeyUp={props.keyUp}
        onChange={props.onChange}
        type="search"
        placeholder="Search for a title..."
        value={props.searchTerm}
      />
    </div>
  );
};

export default Search;
