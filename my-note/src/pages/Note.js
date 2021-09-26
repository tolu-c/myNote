import React, { useState, useEffect } from "react";

import { ReactComponent as BackArrow } from "../assets/arrowLeft.svg";
import { Link } from "react-router-dom";

const Note = ({ match, history }) => {
  let noteId = match.params.id;

  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [noteId]);

  let getNote = async () => {
    if (noteId === "new") {
      return;
    }
    let response = await fetch(`http://127.0.0.1:5000/notes/${noteId}`);
    let data = await response.json();
    setNote(data);
  };

  const updateNote = async () => {
    await fetch(`http://127.0.0.1:5000/notes/${noteId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...note, updated: new Date() }),
    });
  };

  const deleteNote = async () => {
    await fetch(`http://127.0.0.1:5000/notes/${noteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    
    history.push("/");
  };

  const createNote = async () => {
    await fetch(`http://127.0.0.1:5000/notes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...note, updated: new Date() }),
    });
  };

  let handleSubmit = () => {
    if (noteId !== "new" && !note.body) {
      deleteNote();
    } else if (noteId !== "new") {
      updateNote();
    } else if (noteId === "new" && note !== null) {
      createNote();
    }
    history.push("/");
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to={"/"}>
            <BackArrow onClick={handleSubmit} />
          </Link>
        </h3>
        {noteId !== "new" ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>

      <textarea
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        value={note?.body}
      ></textarea>
    </div>
  );
};

export default Note;
