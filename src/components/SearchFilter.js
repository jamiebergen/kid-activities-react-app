import React, { useState } from "react";

const SearchFilter = ({ posts, setFilteredPosts }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleFilterInputChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleSearchFilterSubmit = (e) => {
    e.preventDefault();
    let results = posts.filter((post) =>
      post.title.rendered.toLowerCase().includes(searchValue.toLowerCase())
    );
    if (filterValue) {
      results = results.filter((post) => post.acf.ages.includes(filterValue));
    }
    setFilteredPosts(results);
  };

  const handleClearForm = (e) => {
    e.preventDefault();
    setSearchValue("");
    setFilterValue("");
    setFilteredPosts(posts);
    const selectAge = document.querySelector("#age-group");
    selectAge.selectedIndex = null;
  };

  return (
    <form>
      <label htmlFor="search">Search by title:</label>
      <input
        value={searchValue}
        onChange={handleSearchInputChange}
        type="text"
        placeholder="Search"
        id="search"
      />
      <label htmlFor="age-group">Filter by age group:</label>
      <select name="age" id="age-group" onChange={handleFilterInputChange}>
        <option value="">Select Age Group</option>
        <option value="baby">Baby</option>
        <option value="toddler">Toddler</option>
        <option value="kindergarten">Kindergarten</option>
      </select>
      <input
        onClick={handleSearchFilterSubmit}
        type="submit"
        value="Filter Activities"
      />
      <input onClick={handleClearForm} type="submit" value="Clear" />
    </form>
  );
};

export default SearchFilter;
