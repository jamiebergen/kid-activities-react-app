import React from "react";
import { Header, List, Checkbox } from "semantic-ui-react";

const SuppliesList = ({ selectedIds, posts }) => {
  const selectedPosts = posts.filter((post) => selectedIds.includes(post.id));

  const suppliesListDupes = selectedPosts
    .map((post) => post.acf.supplies_list.split(", "))
    .flat();

  const suppliesList = [...new Set(suppliesListDupes)];

  return (
    <>
      <Header as="h2">Supplies</Header>
      {suppliesList.length > 0 ? (
        <List>
          {suppliesList.map((item) => (
            <List.Item>
              <Checkbox label={item} />
            </List.Item>
          ))}
        </List>
      ) : (
        <p>No Supplies</p>
      )}
    </>
  );
};

export default SuppliesList;
