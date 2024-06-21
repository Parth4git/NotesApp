import React from "react";
import { Link } from "react-router-dom";

const noteItem = ({ note }) => {
  return (
    <Link className="note-item" to={`/edit-notes/${note.id}`}>
      <h3 className="title">{note.title}</h3>
      <p className="content">{note.content}</p>
    </Link>
  );
};

export default noteItem;
