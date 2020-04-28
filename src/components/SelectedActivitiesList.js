import React from "react";
import Activity from "./Activity";

const SelectedActivitiesList = ({ posts, selectedIds, setSelectedIds }) => {
  const selectedActivities = posts.filter((post) =>
    selectedIds.includes(post.id)
  );

  return (
    <>
      <h2>Selected Activities</h2>
      {selectedActivities.length > 0 ? (
        <ul>
          {selectedActivities.map((post) => (
            <Activity
              key={post.id}
              post={post}
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
            />
          ))}
        </ul>
      ) : (
        <p>No Activities Selected</p>
      )}
    </>
  );
};

export default SelectedActivitiesList;
