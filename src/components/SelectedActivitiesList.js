import React from "react";
import { Card, Header } from "semantic-ui-react";
import ActivityCard from "./ActivityCard";

const SelectedActivitiesList = ({ posts, selectedIds, setSelectedIds }) => {
  const selectedActivities = posts.filter((post) =>
    selectedIds.includes(post.id)
  );

  return (
    <>
      <Header as="h2">Selected Activities</Header>
      {selectedActivities.length > 0 ? (
        <Card.Group>
          {selectedActivities.map((post) => (
            <ActivityCard
              key={post.id}
              post={post}
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
            />
          ))}
        </Card.Group>
      ) : (
        <p>No Activities Selected</p>
      )}
    </>
  );
};

export default SelectedActivitiesList;
