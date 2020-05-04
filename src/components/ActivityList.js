import React, { useState, useEffect } from "react";
import { Card, Header } from "semantic-ui-react";
import ActivityCard from "./ActivityCard";
import SearchFilter from "./SearchFilter";

const ActivityList = ({
  posts,
  postsLoaded,
  selectedIds,
  setSelectedIds,
  favoriteIds,
  setFavoriteIds,
}) => {
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => setFilteredPosts(posts), [posts]);

  return (
    <>
      <Header as="h2">Activities</Header>
      {postsLoaded ? (
        <>
          <SearchFilter posts={posts} setFilteredPosts={setFilteredPosts} />
          {filteredPosts.length > 0 ? (
            <Card.Group>
              {filteredPosts.map((post) => (
                <ActivityCard
                  key={post.id}
                  post={post}
                  selectedIds={selectedIds}
                  setSelectedIds={setSelectedIds}
                  favoriteIds={favoriteIds}
                  setFavoriteIds={setFavoriteIds}
                />
              ))}
            </Card.Group>
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
