import React, { useState } from "react";

import Form from "./Components/Form.js";

import "./App.css";

function App() {
  const [newMember, setNewMember] = useState([
    {
      name: "gdgd",
      email: "gdgd",
      role: "dgdg"
    }
  ]);
  return (
    <div className="App">
      <h1>Build Your Team!</h1>
      <Form newMember={newMember} setNewMember={setNewMember} />

      {newMember.map((member, index) => (
        <div className="member-entry" key={index}>
          <h2>{member.name}</h2>
          <h2>{member.email}</h2>
          <h2>{member.role}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
