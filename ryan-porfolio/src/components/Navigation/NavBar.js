import React from 'react';
import ryanLogo from '../../icons/ryanLogoGradient.svg'
import styled from 'styled-components'
import { size } from '../../theme/theme'
// import { Text } from '../Text';

const NavigationWrapper = styled.div`
    border-bottom: 2px solid white;
    background-color: white;
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
    margin: 12px;
    padding-top: 8px;
`

const NavigationLinkContainer = styled.div`
    padding-right: 12px;
`

const NavLink = styled.p`
    font-weight: bold,
    font-size: 4rem;


`

function NavBar() {
    return (
        <NavigationWrapper>
            <LogoContainer>
                <img src={ryanLogo} />
            </LogoContainer>
            <NavigationLinkContainer>
                <NavLink>
                    test
                </NavLink>
            </NavigationLinkContainer>
        </NavigationWrapper>
    )
}

export {NavBar}