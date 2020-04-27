import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import ActivityList from "./components/ActivityList";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [postsLoaded, setPostsLoaded] = useState(false);

  const apiUrl = `https://kidactivities.jamiebergen.com/wp-json/wp/v2/posts`;

  const fetchPosts = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
        setPostsLoaded(true);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => fetchPosts(apiUrl), [apiUrl]);

  return (
    <div className="App">
      <Header />
      <ActivityList posts={posts} postsLoaded={postsLoaded} />
    </div>
  );
};

export default App;
