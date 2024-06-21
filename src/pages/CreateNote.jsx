import React from "react";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "../App.css";

const CreateNote = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      const newNote = {
        time: new Date().getTime(),
        id: uuidv4(),
        title,
        content,
      };

      setNotes((prevNotes) => [...prevNotes, newNote]);
      console.log(newNote);

      navigate("/");
    }
  };

  return (
    <section className="create-note">
      <header className="create-note-header">
        <Link to="/" className="back-btn">
          <IoChevronBackCircleSharp />
        </Link>
        <button className="btn-save" onClick={handleSubmit}>
          Save
        </button>
      </header>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="title-input"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="content-input"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Take a note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default CreateNote;
