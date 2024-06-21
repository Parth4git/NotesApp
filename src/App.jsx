import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditNote from "./pages/editNote";
import CreateNote from "./pages/CreateNote";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home notes={notes} />} />
        <Route
          path="/edit-notes/:id"
          element={<EditNote notes={notes} setNotes={setNotes} />}
        />
        <Route
          path="/create-note"
          element={<CreateNote setNotes={setNotes} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
