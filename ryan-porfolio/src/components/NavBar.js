import React from 'react';
import ryanLogo from '../icons/'

function NavBar() {
    return (
        <React.Fragment>
            <img src={ryanLogo} />
            <h1>Here's the nav bar!</h1>
        </React.Fragment>
    
    )
}

export {NavBar}