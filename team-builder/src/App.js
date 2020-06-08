import React, { useState } from "react";

import Form from "./Components/Form.js";
import Members from "./Components/Members.js";

import "./App.css";

function App() {
  const [memberToEdit, setMemberToEdit] = useState();

  const editMember = member => {
    setMemberToEdit(member);
  };

  const [newMember, setNewMember] = useState([
    {
      name: "Tom from Myspace",
      email: "tom@myspace.com",
      role: "Coder and Meme Icon"
    }
  ]);

  return (
    <div className="App">
      <h1>Build Your Team</h1>
      <Form
        newMember={newMember}
        setNewMember={setNewMember}
        memberToEdit={memberToEdit}
        setMemberToEdit={setMemberToEdit}
      />
      <Members
        newMember={newMember}
        memberToEdit={memberToEdit}
        setMemberToEdit={editMember}
      />
    </div>
  );
}

export default App;
