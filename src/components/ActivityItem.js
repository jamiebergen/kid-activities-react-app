import React from "react";
import ActivityModal from "./ActivityModal";
import Draggable from "react-draggable";
import { Item, Icon, Button } from "semantic-ui-react";

const ActivityItem = ({ post, handleDragStop, getCurrentPosition }) => {
  return (
    <Draggable
      axis="y"
      bounds=".activity-table-body"
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      position={getCurrentPosition(post.id)}
      scale={1}
      onStop={handleDragStop}
    >
      <Item.Group>
        <Item data-id={post.id}>
          <Item.Image size="tiny" src={post.fimg_url} />
          <Item.Content verticalAlign="middle">
            <ActivityModal post={post} />
          </Item.Content>
          <Button className="handle" icon>
            <Icon name="content" />
          </Button>
        </Item>
      </Item.Group>
    </Draggable>
  );
};

export default ActivityItem;
