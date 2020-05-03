import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { Tab, Container } from "semantic-ui-react";

import AppHeader from "./components/AppHeader";
import ActivityList from "./components/ActivityList";
import SelectedActivitiesList from "./components/SelectedActivitiesList";
import SuppliesList from "./components/SuppliesList";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [postsLoaded, setPostsLoaded] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

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

  const panes = [
    {
      menuItem: "All Activities",
      render: () => (
        <Tab.Pane>
          <ActivityList
            posts={posts}
            postsLoaded={postsLoaded}
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
          />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Selected Activities",
      render: () => (
        <Tab.Pane>
          <SelectedActivitiesList
            posts={posts}
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
          />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Supplies",
      render: () => (
        <Tab.Pane>
          <SuppliesList posts={posts} selectedIds={selectedIds} />
        </Tab.Pane>
      ),
    },
  ];

  return (
    <div className="App">
      <Container>
        <AppHeader />
        <Tab panes={panes} />
      </Container>
    </div>
  );
};

export default App;
