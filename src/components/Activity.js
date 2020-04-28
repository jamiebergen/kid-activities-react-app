import React from "react";

const Activity = ({ post, selectedIds, setSelectedIds }) => {
  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setSelectedIds([...selectedIds, post.id]);
    } else {
      setSelectedIds(selectedIds.filter((id) => id !== post.id));
    }
  };

  return (
    <li data-id={post.id}>
      <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      <span>{post.acf.ages.join(", ")}</span>
      <form>
        <label>
          Select:
          <input
            name="selectActivity"
            type="checkbox"
            checked={selectedIds.includes(post.id)}
            onChange={handleCheckbox}
          />
        </label>
      </form>
    </li>
  );
};

export default Activity;
