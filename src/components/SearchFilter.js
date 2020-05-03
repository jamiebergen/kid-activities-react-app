import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const SearchFilter = ({ posts, setFilteredPosts }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleFilterInputChange = (e, { value }) => {
    setFilterValue(value);
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
  };

  const ageOptions = [
    {
      key: "baby",
      text: "Baby",
      value: "baby",
    },
    {
      key: "todder",
      text: "Toddler",
      value: "toddler",
    },
    {
      key: "preschool",
      text: "Preschool",
      value: "preschool",
    },
    {
      key: "kindergarten",
      text: "Kindergarten",
      value: "kindergarten",
    },
    {
      key: "elementary",
      text: "Elementary School",
      value: "elementary",
    },
    {
      key: "middle",
      text: "Middle School",
      value: "middle",
    },
    {
      key: "high",
      text: "High School",
      value: "high",
    },
  ];

  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          label="Search by title:"
          placeholder="Search..."
          onChange={handleSearchInputChange}
          value={searchValue}
        />
        <Form.Select
          fluid
          clearable
          label="Filter by age group:"
          options={ageOptions}
          placeholder="Age Group"
          onChange={handleFilterInputChange}
          value={filterValue}
        />
      </Form.Group>
      <Form.Group>
        <Form.Button onClick={handleSearchFilterSubmit}>
          Filter Activities
        </Form.Button>
        <Form.Button onClick={handleClearForm}>Clear</Form.Button>
      </Form.Group>
    </Form>
  );
};

export default SearchFilter;
