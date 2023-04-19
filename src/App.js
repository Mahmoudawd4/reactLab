import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from "react";
import "./App.css";
import Post from './post';
import Search from './Search';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <Search search={search} setSearch={setSearch} />
      <div className="row">
        {filteredPosts.map((post) => (
          <div className="col-md-4" key={post.id}>
            <Post post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};



export default App;
