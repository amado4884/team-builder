import React, { useState } from "react";
import Form from "./Form";
import "./App.css";
import Member from "./Member";

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
      <Form addMember={addMember} editMember={editMember} member={member} editing={editing} />
      {teamList.map((member) => (
        <Member
          key={member.id}
          member={member}
          removeMember={removeMember}
          setEditing={setEditing}
          setMember={setMember}
        />
      ))}
    </div>
  );
}

export default App;
