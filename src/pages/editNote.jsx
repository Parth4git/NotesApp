import React from "react";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { Link, useParams, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import "../App.css";

const editNote = ({ notes, setNotes }) => {
  const { id } = useParams();

  const navigate = useNavigate();

  const note = notes.find((note) => note.id === id);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleForm = (e) => {
    e.preventDefault();

    if (title && content) {
      const newNote = { ...note, title, content };
      const newNotes = notes.map((note) => (note.id === id ? newNote : note));
      setNotes(newNotes);
    }
    navigate("/");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
      navigate("/");
    }
  };

  return (
    <section className="create-note">
      <header className="create-note-header">
        <Link to="/" className="back-btn">
          <IoChevronBackCircleSharp />
        </Link>
        <button className="btn-save" onClick={handleForm}>
          Save
        </button>
        <button className="btn-delete" onClick={handleDelete}>
          <MdDelete />
        </button>
      </header>
      <form className="form" onSubmit={handleForm}>
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

export default editNote;
