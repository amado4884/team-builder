import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

function Form(props) {
  const [name, setName] = useState(props.member ? props.member.name : "");
  const [email, setEmail] = useState(props.member ? props.member.email : "");
  const [role, setRole] = useState(props.member ? props.member.role : "");
  const [editing, setEditing] = useState(props.editing);

  useEffect(() => {
    setName(props.member.name);
    setEmail(props.member.email);
    setRole(props.member.role);
  }, [props.member]);

  useEffect(() => {
    setEditing(props.editing);
  }, [props.editing]);

  const addMember = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || role === "") return;
    props.addMember({ name, email, role, id: uuid() });
    setName("");
    setEmail("");
    setRole("");
  };

  const editMember = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || role === "") return;
    props.editMember({ name, email, role, id: props.member.id });
    setName("");
    setEmail("");
    setRole("");
    setEditing(false);
  };

  return (
    <form className="Form">
      <input type="hidden" value={props.member.id ? props.member.id : ""} />
      <input type="text" value={name} placeholder="Team Memeber Name" onChange={(e) => setName(e.target.value)} />
      <input type="text" value={email} placeholder="Team Memeber Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="text" value={role} placeholder="Team Memeber Role" onChange={(e) => setRole(e.target.value)} />
      <button type="submit" onClick={editing ? editMember : addMember}>
        {(editing ? "Save" : "Add") + " Member"}
      </button>
    </form>
  );
}

export default Form;
