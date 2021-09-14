import React from "react";

function ListItem({ note }) {
  return (
    <div className="notes-list-item">
      <h3>{note.body}</h3>
    </div>
  );
}

export default ListItem;
