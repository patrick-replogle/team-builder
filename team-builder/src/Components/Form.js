import React, { useState } from "react";

const Form = props => {
  const [member, setMember] = useState({ name: "", email: "", role: "" });

  const handleChange = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const resetInputs = event => {
    setMember({ name: "", email: "", role: "" });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(member);
    props.setNewMember([member, ...props.newMember]);
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
          <select
            type="text"
            placeholder="role"
            name="role"
            value={member.role}
            onChange={handleChange}
          >
            <option></option>
            <option>Full Stack</option>
            <option>UX Designer</option>
            <option>Data Science</option>
            <option>IOS Development</option>
            <option>Android Development</option>
          </select>
        </label>
        <button>Submit</button>
        <button onChange={resetInputs}>Reset</button>
      </form>
    </div>
  );
};

export default Form;
