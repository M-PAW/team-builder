import React, {useState} from 'react';
import './App.css';
import Form from "./Form.js";
import FormCard from './FormCard.js';

function App() {

  const [member, setMember] = useState([{
    name: "",
    email: "",
    role: ""
}])

  // const addTeamMember = team => {
  //   const setTeam = {
  //     name: team.name,
  //     email: team.email,
  //     role: team.role
  //   };
  // }


  const addTeamMember = team => {
    const addTeam = {
      name: team.name,
      email: team.email,
      role: team.role
    };
    setMember([...member, addTeam])
  }

  return (
    <div className="App">
      <Form addTeamMember={addTeamMember}/>
      <FormCard member={member}/>
    </div>
  );
}

export default App;
