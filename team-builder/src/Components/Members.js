import React from "react";

const Members = props => {
  return (
    <>
      {props.newMember.map((member, index) => (
        <div className="member-entry" key={index}>
          <p>Name: {member.name}</p>
          <p>Email: {member.email}</p>
          <p>Role: {member.role}</p>
        </div>
      ))}
    </>
  );
};

export default Members;
