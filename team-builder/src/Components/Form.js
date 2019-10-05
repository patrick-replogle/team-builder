import React, { useState } from "react";

const Form = () => {
  const [member, setMember] = useState({ name: "", email: "", role: "" });

  const handleChange = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const resetInputs = event => {
    setMember({ name: "", email: "", role: "" });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(member.name);
    console.log(member.email);
    console.log(member.role);
    resetInputs();
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            placeholder="name"
            name="name"
            value={member.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            placeholder="email"
            name="email"
            value={member.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            placeholder="role"
            name="role"
            value={member.role}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
        <button onChange={resetInputs}>Reset</button>
      </form>
    </div>
  );
};

export default Form;
