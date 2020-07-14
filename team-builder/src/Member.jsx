import React from "react";

const Member = ({ member, setMember, setEditing, removeMember }) => {
  return (
    <div className="member">
      <span>{member.name}</span>
      <span>{member.email}</span>
      <span>{member.role}</span>
      <button className="remove" onClick={(e) => removeMember(member.id)}>
        <i class="fa fa-times" aria-hidden="true"></i>
      </button>
      <button
        className="edit"
        onClick={(e) => {
          setMember(member);
          setEditing(true);
        }}
      >
        <i class="fa fa-edit" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Member;
