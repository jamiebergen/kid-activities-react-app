import React, { useState, useEffect } from "react";
import { useStorageState } from "react-storage-hooks";
import "semantic-ui-css/semantic.min.css";
import { Tab, Container } from "semantic-ui-react";
import "./App.css";

import AppHeader from "./components/AppHeader";
import ActivityList from "./components/ActivityList";
import SelectedActivitiesList from "./components/SelectedActivitiesList";
import FavoriteActivitiesList from "./components/FavoriteActivitiesList";
import SuppliesList from "./components/SuppliesList";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [postsLoaded, setPostsLoaded] = useState(false);
  const [selectedIds, setSelectedIds] = useStorageState(
    localStorage,
    "state-selected-ids",
    []
  );
  const [favoriteIds, setFavoriteIds] = useStorageState(
    localStorage,
    "state-favorite-ids",
    []
  );

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
            favoriteIds={favoriteIds}
            setFavoriteIds={setFavoriteIds}
          />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Favorite Activities",
      render: () => (
        <Tab.Pane>
          <FavoriteActivitiesList
            posts={posts}
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
            favoriteIds={favoriteIds}
            setFavoriteIds={setFavoriteIds}
          />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "This Week's Activities",
      render: () => (
        <Tab.Pane>
          <SelectedActivitiesList
            posts={posts}
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
            favoriteIds={favoriteIds}
            setFavoriteIds={setFavoriteIds}
          />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Supplies List",
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
