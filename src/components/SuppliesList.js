import React from "react";
import SupplyItem from "./SupplyItem";

const SuppliesList = ({ selectedIds, posts }) => {
  const selectedPosts = posts.filter((post) => selectedIds.includes(post.id));

  const suppliesListDupes = selectedPosts
    .map((post) => post.acf.supplies_list.split(", "))
    .flat();

  const suppliesList = [...new Set(suppliesListDupes)];

  console.log(suppliesList);

  return (
    <>
      <h2>Supplies</h2>
      {suppliesList.length > 0 ? (
        <ul>
          {suppliesList.map((item) => (
            <SupplyItem key={item} item={item} />
          ))}
        </ul>
      ) : (
        <p>No Supplies</p>
      )}
    </>
  );
};

export default SuppliesList;
