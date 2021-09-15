import React from "react";

import { Link } from "react-router-dom";

function ListItem({ note }) {
  return (
    <div className="notes-list-item">
      <Link to={`/note/${note.id}`}>
        <h3>{note.body}</h3>
      </Link>
    </div>
  );
}

export default ListItem;
