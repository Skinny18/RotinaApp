import React from "react";
import "./header.css";

function Header({ handleToggleDarkMode }){
    return(
        <>
        <nav className="navbar">
            <h1>Rotina da Amands</h1>
            <button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				Toggle Mode
			</button>
        </nav>
        </>
    )
}

export default Header;