import React, { Children } from 'react';
import styled from 'styled-components'

const NavLinkItem = styled.p`
    color: white;
    font-size: 2rem;
    background-color: red;
    height: 32px;
`



function NavLink(text) {
    return (
        <NavLinkItem>
            {text}
        </NavLinkItem>
    )
}

export { NavLink }