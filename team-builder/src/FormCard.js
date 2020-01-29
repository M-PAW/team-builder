import React from 'react';
import './cardStyle.css';


function FormCard(props) {


    return (
        <div class="cardBox">
        {
            props.member.map( person => {
                return(
                <div class="contentBox">
                    <h2>{person.name}</h2>
                    <p>{person.email}</p>
                    <p>{person.role}</p>
                </div>
                )
            })

        } 
        </div>
    )


}

export default FormCard;