import React, { useState, useEffect } from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";
import ActivityModal from "./ActivityModal";

const ActivityCard = ({
  post,
  selectedIds,
  setSelectedIds,
  favoriteIds,
  setFavoriteIds,
}) => {
  const [buttonMessage, setButtonMessage] = useState([
    "plus",
    "Select Activity",
  ]);
  const [isFavorite, setIsFavorite] = useState(false);

  const updateButtonMessage = () => {
    if (selectedIds.includes(post.id)) {
      setButtonMessage(["minus", "Remove Activity"]);
    } else {
      setButtonMessage(["plus", "Select Activity"]);
    }
  };

  const updateFavoriteButton = () => {
    if (favoriteIds.includes(post.id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  };

  useEffect(updateButtonMessage, [selectedIds]);

  useEffect(updateFavoriteButton, [favoriteIds]);

  const handleSelect = () => {
    if (selectedIds.includes(post.id)) {
      setSelectedIds(selectedIds.filter((id) => id !== post.id));
    } else {
      setSelectedIds([...selectedIds, post.id]);
    }
    updateButtonMessage();
  };

  const handleFavorite = () => {
    if (favoriteIds.includes(post.id)) {
      setFavoriteIds(favoriteIds.filter((id) => id !== post.id));
    } else {
      setFavoriteIds([...favoriteIds, post.id]);
    }
    updateFavoriteButton();
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
        <Button icon labelPosition="left" onClick={handleSelect}>
          <Icon name={buttonMessage[0]} />
          {buttonMessage[1]}
        </Button>
        <Button
          onClick={handleFavorite}
          icon
          toggle
          active={isFavorite}
          floated="right"
        >
          <Icon name="heart" />
        </Button>
      </Card.Content>
    </Card>
  );
};

export default ActivityCard;
