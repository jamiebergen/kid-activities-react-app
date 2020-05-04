import React from "react";
import { Card, Header } from "semantic-ui-react";
import ActivityCard from "./ActivityCard";

const FavoriteActivitiesList = ({
  posts,
  selectedIds,
  setSelectedIds,
  favoriteIds,
  setFavoriteIds,
}) => {
  const favoriteActivities = posts.filter((post) =>
    favoriteIds.includes(post.id)
  );

  return (
    <>
      <Header as="h2">Favorite Activities</Header>
      {favoriteActivities.length > 0 ? (
        <Card.Group>
          {favoriteActivities.map((post) => (
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
        <p>No Favorite Activities</p>
      )}
    </>
  );
};

export default FavoriteActivitiesList;
