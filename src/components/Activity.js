import React from "react";

const Activity = ({ post }) => {
  return (
    <li data-id={post.id}>
      <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      <span>{post.acf.ages.join(", ")}</span>
      <form>
        <label>
          Select:
          <input name="selectActivity" type="checkbox" />
        </label>
      </form>
    </li>
  );
};

export default Activity;
