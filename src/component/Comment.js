import React, { useState, useEffect } from "react";
import faker from "@faker-js/faker";

export default function Comment() {
  const [comments, setComments] = useState(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      // return the parsed JSON object back to a javascript object
      return JSON.parse(savedComments);
      // otherwise
    } else {
      // return an empty array
      return [];
    }
  });
  const users = JSON.parse(localStorage.getItem("users"))[0];
  // console.log(users);
  // console.log(users.username);
  const [comment, setComment] = useState("");
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);
  function handleInputChange(e) {
    // set the new state value to what's currently in the input box
    setComment(e.target.value);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    if (comment !== "") {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          text: comment.trim(),
        },
      ]);
    }

    // clear out the input box
    setComment("");
  }

  return (
    <div className="ui comments">
      <form className="ui form" onSubmit={handleFormSubmit}>
        <div className="field">
          <input
            name="comment"
            type="text"
            placeholder="Create a new comment"
            value={comment}
            onChange={handleInputChange}
          />
        </div>
      </form>
      {comments.map((comment) => (
        // <li key={comment.id}>{comment.text}</li>
        <div className="comment" key={comment.id}>
          <a href="/" className="avatar">
            <img alt="avater" src={faker.image.avatar()} />
          </a>
          <div className="content">
            <a className="author" href="/">
              {users.username}
            </a>
            <div className="metadata">
              <span className="date">Today at 5:42PM</span>
            </div>
            <div className="text">{comment.text}</div>
            <div className="actions">
              <a className="reply" href="/">
                Reply
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
