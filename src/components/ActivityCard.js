import React, { useState, useEffect } from "react";
import { Card, Image, Button } from "semantic-ui-react";
import ActivityModal from "./ActivityModal";

const ActivityCard = ({ post, selectedIds, setSelectedIds }) => {
  const [buttonMessage, setButtonMessage] = useState("Select Activity");

  const updateButtonMessage = () => {
    if (selectedIds.includes(post.id)) {
      setButtonMessage("Remove Activity");
    } else {
      setButtonMessage("Select Activity");
    }
  };

  useEffect(updateButtonMessage, [selectedIds]);

  const handleClick = () => {
    if (selectedIds.includes(post.id)) {
      setSelectedIds(selectedIds.filter((id) => id !== post.id));
    } else {
      setSelectedIds([...selectedIds, post.id]);
    }
    updateButtonMessage();
  };

  return (
    <Card>
      <Image src={post.fimg_url} wrapped ui={false} alt={post.title.rendered} />
      <Card.Content>
        <Card.Header>
          <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        </Card.Header>
        <Card.Meta>
          <span>{post.acf.ages.join(", ")}</span>
        </Card.Meta>
        <Card.Description
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />
        <ActivityModal post={post} />
      </Card.Content>
      <Card.Content extra>
        <Button onClick={handleClick}>{buttonMessage}</Button>
      </Card.Content>
    </Card>
  );
};

export default ActivityCard;
