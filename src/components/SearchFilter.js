import React, { useState } from "react";

const SearchFilter = ({ posts, setFilteredPosts }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    const filtered = posts.filter((post) =>
      post.title.rendered.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <form>
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input onClick={callSearchFunction} type="submit" value="Search" />
    </form>
  );
};

export default SearchFilter;
