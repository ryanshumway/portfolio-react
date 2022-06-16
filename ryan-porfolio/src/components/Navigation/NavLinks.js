import React, { Children } from 'react';
import styled from 'styled-components'

const NavLinkItem = styled.text`
    color: white;
    font-size: 2rem;
    background-color: red;
    height: 32px;
`



function NavLink(text) {
    return (
        <NavLinkItem>
            <h3>{text}</h3>
        </NavLinkItem>
    )

    
}

export { NavLink }