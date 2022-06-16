import React from 'react';
import styled from 'styled-components'

const StyledText = styled.p`

    text-align: ${props};
    

`

function Text(text) {
    return (
        <NavLinkItem>
            <h3>{text}</h3>
        </NavLinkItem>
    )

    
}

export { Text }