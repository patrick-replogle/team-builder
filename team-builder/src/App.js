import React, { useState } from "react";

import Form from "./Components/Form.js";
import Members from "./Components/Members.js";

import "./App.css";

function App() {
  const [newMember, setNewMember] = useState([
    { name: "Tom from Myspace", email: "tom@myspace.com", role: "Coder Icon" }
  ]);

  return (
    <div className="App">
      <h1>Build Your Team!</h1>
      <Form newMember={newMember} setNewMember={setNewMember} />
      <Members newMember={newMember} />
    </div>
  );
}

export default App;
