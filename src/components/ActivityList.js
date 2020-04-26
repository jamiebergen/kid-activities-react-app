import React, { useState, useEffect } from "react";
import Activity from "./Activity";
import SearchFilter from "./SearchFilter";

const ActivityList = ({ posts, postsLoaded }) => {
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => setFilteredPosts(posts), [posts]);

  return (
    <>
      <h2>Activities</h2>
      {postsLoaded ? (
        <>
          <SearchFilter posts={posts} setFilteredPosts={setFilteredPosts} />
          <ul>
            {filteredPosts.map((post) => (
              <Activity key={post.id} post={post} />
            ))}
          </ul>
        </>
      ) : (
        <>
          <p>Loading...</p>
        </>
      )}
    </>
  );
};

export default ActivityList;
