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
          {filteredPosts.length > 0 ? (
            <ul>
              {filteredPosts.map((post) => (
                <Activity key={post.id} post={post} />
              ))}
            </ul>
          ) : (
            <p>No Results</p>
          )}
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
