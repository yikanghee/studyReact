import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // axios({
    //   method: "GET",
    //   url: "https://jsonplaceholder.typicode.com/photos",
    // }).then((response) => setPosts(response.data));

    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => setPosts(response.data));

    // const response = await axios.get(
    //   "https://jsonplaceholder.typicode.com/photos"
    // );
    // setPosts(response.data);
  });

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <div>{post.title}</div>
          <div>
            <img src={post.thumbnailUrl} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default App;
