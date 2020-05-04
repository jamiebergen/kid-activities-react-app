import React from "react";
import { useStorageState } from "react-storage-hooks";
import { Header, List, Checkbox } from "semantic-ui-react";

const SuppliesList = ({ selectedIds, posts }) => {
  const [checkedSupplies, setCheckedSupplies] = useStorageState(
    localStorage,
    "state-checked-supplies",
    []
  );

  const selectedPosts = posts.filter((post) => selectedIds.includes(post.id));

  const suppliesListDupes = selectedPosts
    .map((post) => post.acf.supplies_list.split(", "))
    .flat();

  const suppliesList = [...new Set(suppliesListDupes)];

  const toggleItem = (e, { label }) => {
    console.log(checkedSupplies);
    if (checkedSupplies.includes(label)) {
      setCheckedSupplies(checkedSupplies.filter((item) => item !== label));
    } else {
      setCheckedSupplies([...checkedSupplies, label]);
    }
  };

  return (
    <>
      <Header as="h2">Supplies</Header>
      {suppliesList.length > 0 ? (
        <List>
          {suppliesList.map((item) => (
            <List.Item key={item}>
              <Checkbox
                onChange={toggleItem}
                checked={checkedSupplies.includes(item)}
                label={item}
              />
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
