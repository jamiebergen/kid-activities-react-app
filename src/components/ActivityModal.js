import React from "react";
import { Modal, Button, Image, List, Header } from "semantic-ui-react";

const ActivityModal = ({ post }) => {
  return (
    <Modal
      trigger={
        <Button basic color="blue" className="button-link">
          Read more...
        </Button>
      }
      closeIcon
    >
      <Modal.Header dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <Modal.Content image scrolling>
        <Image wrapped size="medium" src={post.fimg_url} />
        <Modal.Description>
          <Header>About/Instructions:</Header>
          <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          <a href={post.acf.source_url}>See original resource</a>
          <Header>Supplies:</Header>
          <List bulleted>
            {post.acf.supplies_list.split(", ").map((item) => (
              <List.Item key={item}>{item}</List.Item>
            ))}
          </List>
          <Header>Ages:</Header>
          <List divided horizontal>
            {post.acf.ages.map((age) => (
              <List.Item key={age}>{age}</List.Item>
            ))}
          </List>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default ActivityModal;
