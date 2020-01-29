import React, {useState} from 'react';



const Form = props => {

    const [team, setTeam] = useState({
        name: "",
        email: "",
        role: ""
    })


    const changeHandler = event => {
        setTeam({...team, [event.target.name]: event.target.value});
    }

    const submitHandler = event => {
        event.preventDefault();
        props.addTeamMember(team);
        setTeam({name: "", email: "", role: ""})
    }


    

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Member Name</label>
                <input id="name" name="name" type="text" onChange={changeHandler} placeholder="name" value={team.name}/>

                <label htmlFor="email">Email</label>
                <input id="email" name="email" onChange={changeHandler} placeholder="email" value={team.email}/>

                <label htmlFor="role">Role</label>
                <input id="role" name="role" onChange={changeHandler} placeholder="role" value={team.role}/>

                <button type="submit">Add Member</button> 
            </form>

        </div>
    )
};

export default Form;