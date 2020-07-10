import React from "react";

function ContactCard(props)
{
    console.log(props)

    return(
        <div className="contact-card">
            <img src={props.src}/>
            <h3>{props.name}</h3>
            <p>{props.phone}</p>
        </div>

    )
}

export default ContactCard;