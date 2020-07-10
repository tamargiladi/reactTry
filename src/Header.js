import React from "react";

function Header()
{
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if(hours<12)
        timeOfDay="morning";
    else if(hours>=12&&hours<=17)
        timeOfDay = "afternoon";
    else
        timeOfDay = "night";

    const styles ={

        //Currently Empty!
    }
    return(
        <header className="navbar">
            <p style={styles}>{"Good " + timeOfDay + ", Tamar!"}</p>
        </header>
    )
}

export default Header;
