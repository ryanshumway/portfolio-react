import React from 'react';
import ryanLogo from '../../icons/ryanLogoGradient.svg'
import styled from 'styled-components'
import { spacing } from '../theme.js'
import { NavLink } from './NavLinks';

const NavigationWrapper = styled.div`
    border-bottom: 2px solid #FFFFFF;
    width: 100%;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
`

const LogoContainer = styled.div`
    width: 144px;
    margin: ${spacing.MD};
    padding-top: ${spacing.MD};
`

function NavBar() {
    return (
        <NavigationWrapper>
            <LogoContainer>
                <img src={ryanLogo} />
            </LogoContainer>
            <NavLink>
                Link 1
            </NavLink>
        </NavigationWrapper>
    )
}

export {NavBar}