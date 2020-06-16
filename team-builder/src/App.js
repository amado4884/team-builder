import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

function App() {
  const [teamList, setTeamList] = useState([]);
  const [member, setMember] = useState({});
  const [editing, setEditing] = useState(false);

  const addMember = (member) => {
    setTeamList([...teamList, member]);
  };

  const editMember = (member) => {
    setTeamList(teamList.map((m) => (m.id === member.id ? member : m)));
  };

  const removeMember = (memberId) => {
    setTeamList(teamList.filter((member) => member.id !== memberId));
  };
  return (
    <div className="App">
      <h3>Team List</h3>
      <ul>
        {teamList.map((member) => (
          <li key={member.id}>
            {member.name}, {member.email}, {member.role} -{" "}
            <button className="remove" onClick={(e) => removeMember(member.id)}>
              X
            </button>
            <button
              className="edit"
              onClick={(e) => {
                setMember(member);
                setEditing(true);
              }}
            >
              E
            </button>
          </li>
        ))}
      </ul>
      <Form addMember={addMember} editMember={editMember} member={member} editing={editing} />
    </div>
  );
}

export default App;
