import React, { Component } from "react";

import Header from "./Header";
import Post from "./Post";

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/20543482?s=400&v=4",
        time: "há 3 min",
        body:
          "Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget " +
          "libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing " +
          "vitae est. Sed nec felis"
      },
      {
        id: 2,
        name: "Rocketseat",
        avatar: "https://avatars2.githubusercontent.com/u/20543482?s=400&v=4",
        time: "há 30 min",
        body:
          "Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, " +
          "consectetur vel posuere posuere, rutrum eu ipsum."
      },
      {
        id: 3,
        name: "Ricardo Brasil",
        avatar: "https://avatars2.githubusercontent.com/u/20543482?s=400&v=4",
        time: "há 33 min",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco" +
          "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
          "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla" +
          "pariatur. Excepteur sint occaecat cupidatat non proident, sunt in" +
          "culpa qui officia deserunt mollit anim id est laborum."
      }
    ]
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}
