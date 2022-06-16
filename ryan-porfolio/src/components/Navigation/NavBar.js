import React from 'react';
import ryanLogo from '../../icons/ryanLogoGradient.svg'
import styled from 'styled-components'
import { spacing } from '../theme.js'
import { NavLink } from './NavLinks';

const NavigationWrapper = styled.div`
    border-bottom: 2px solid white;
    width: 100%;
    margin: 0;
    padding: 0;
    justify-content: space-between;
    align-items: center;
    display: flex;
    fles-direction: row;
    z-index: 100;
`

const LogoContainer = styled.div`
    width: 104px;
    margin: ${spacing.LG};
    padding-top: ${spacing.LG};
`

function NavBar() {
    return (
        <NavigationWrapper>
            <LogoContainer>
                <img src={ryanLogo} />
            </LogoContainer>
            <NavLink>
                Yo
            </NavLink>
        </NavigationWrapper>
    )
}

export {NavBar}