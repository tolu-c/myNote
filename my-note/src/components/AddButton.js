import React from "react";

import { Link } from "react-router-dom";
import { ReactComponent as AddBtn } from "../assets/add.svg";

function AddButton() {
  return (
    <Link to="/note/new" className='floating-button'>
      <AddBtn />
    </Link>
  );
}

export default AddButton;
