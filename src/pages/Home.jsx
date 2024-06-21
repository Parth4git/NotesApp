import React, { useEffect, useState } from "react";
import { MdOutlineManageSearch } from "react-icons/md";
import NoteItem from "../component/noteItem";
import { IoMdCloseCircle } from "react-icons/io";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../App.css";

const Home = ({ notes }) => {
  const [showsearch, setShowsearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = () => {
    setFilteredNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  useEffect(() => {
    handleSearch;
  }, [notes]);

  return (
    <section>
      <header className="notes-header">
        {!showsearch && <h1 className="notes-title">Notes</h1>}
        {showsearch && (
          <input
            className="search-input"
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              handleSearch();
            }}
            placeholder="Search Your Notes"
          />
        )}
        <button
          className="search-btn"
          onClick={() => setShowsearch((prevState) => !prevState)}
        >
          {showsearch ? <IoMdCloseCircle /> : <MdOutlineManageSearch />}
        </button>
      </header>
      <div className="notes-container">
        {!filteredNotes.length && <h2>No Notes Found</h2>}
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <Link className="add-notes-btn" to="/create-note">
        <BsFillPlusSquareFill />
      </Link>
    </section>
  );
};

export default Home;
