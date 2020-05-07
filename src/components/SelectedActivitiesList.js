import React, { useEffect } from "react";
import { useStorageState } from "react-storage-hooks";
import { Header, Table } from "semantic-ui-react";
import ActivityItem from "./ActivityItem";

const SelectedActivitiesList = ({ posts, selectedIds }) => {
  const [activityPositions, setActivityPositions] = useStorageState(
    localStorage,
    "state-activity-positions",
    []
  );

  const resetActivityPositions = () => {
    setActivityPositions(selectedIds.map((id) => ({ id: id, yPos: 0 })));
  };

  const getInitialPositions = () => {
    if (!(activityPositions.length > 0)) {
      resetActivityPositions();
    }
  };

  const updateAfterSelectionChange = () => {
    const currentActivityIds = activityPositions.map((x) => x.id).sort();
    const selectedIdsSorted = selectedIds.sort();

    const arraysMatch =
      currentActivityIds.length === selectedIdsSorted.length &&
      currentActivityIds.every(
        (value, index) => value === selectedIdsSorted[index]
      );

    if (!arraysMatch) {
      resetActivityPositions();
    }
  };

  useEffect(getInitialPositions, []);
  useEffect(updateAfterSelectionChange, [selectedIds]);

  const selectedActivities = posts.filter((post) =>
    selectedIds.includes(post.id)
  );

  const getCurrentPosition = (id) => {
    const activity = activityPositions.find((obj) => obj.id === parseInt(id));
    if (activity !== undefined) {
      const currentY = activity.yPos;
      return { x: 0, y: currentY };
    }
  };

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleDragStop = (e, data) => {
    const newY = data.lastY + data.deltaY;
    const id = parseInt(e.target.parentNode.dataset.id);
    const newObj = { id: id, yPos: newY };

    const index = activityPositions.findIndex(
      (x) => x.id === parseInt(e.target.parentNode.dataset.id)
    );

    if (index > -1) {
      setActivityPositions([
        ...activityPositions.slice(0, index),
        Object.assign({}, activityPositions[index], newObj),
        ...activityPositions.slice(index + 1),
      ]);
    }
  };

  return (
    <>
      <Header as="h2">This Week's Activities</Header>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={1}>Day of Week</Table.HeaderCell>
            <Table.HeaderCell width={3}>Activity Schedule</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body className="activity-table-body">
          {weekDays.map((day, index) => (
            <Table.Row key={day}>
              <Table.Cell>
                <Header as="h3">{day}</Header>
              </Table.Cell>
              <Table.Cell>
                {selectedActivities.length > index && (
                  <ActivityItem
                    post={selectedActivities[index]}
                    handleDragStop={handleDragStop}
                    getCurrentPosition={getCurrentPosition}
                  />
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default SelectedActivitiesList;
