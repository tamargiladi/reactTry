import React from "react";

import ContactCard from "./ContactCard";
function MainContent()
{
    return(
        <mainContent className="main-container">
            <div className="checkbox">
                <ContactCard src="https://cdn3.whatculture.com/images/2016/09/cab2608a78402ac9-600x338.jpg"
                             name="The Flash!" phone="050-000-0000"/>
                <ContactCard src="https://sm.ign.com/t/ign_nordic/feature/t/the-flash-/the-flash-how-do-you-solve-a-problem-like-killer-frost_d67v.h720.jpg"
                             name="Killer Frost" phone="052-000-0000"/>
            </div>

        </mainContent>
    )
}

export default MainContent;

