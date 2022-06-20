import React from 'react';
import ryanLogo from '../../icons/ryanLogoGradient.svg'
import styled from 'styled-components'
import { darkTheme, size } from '../../theme/theme'
// import { Text } from '../Text';

const NavigationWrapper = styled.div`
    border-bottom: 4px solid ${darkTheme.focus};
    background-color: ${darkTheme.primary};
    width: 100%;
    justify-content: space-between;
    align-items: center;
    display: flex;
    fles-direction: row;
    z-index: 100;
    position: sticky;
    top: 0;
`

const LogoContainer = styled.div`
    width: 96px;
    margin: 12px;
    padding-top: 8px;
`

const NavigationLinkContainer = styled.div`
    padding-right: 12px;
    display: flex;
    flex-direction: row;
    gap: 24px;
`

const NavLink = styled.p`
    font-weight: 700;
    font-family: sans-serif;
    font-size: 1.15rem;
    color: ${darkTheme.focus};
    padding: 12px;
    background-color: ${darkTheme.secondary};
    border-radius: ${size.LG}

    &:hover {
        text-decoration: underline;
        color: ${darkTheme.red100};
        background-color: ${darkTheme.secondary};
    }

    &:active {
        color: ${darkTheme.red500};
    }
`

function NavBar() {
    return (
        <NavigationWrapper>
            <LogoContainer>
                <img src={ryanLogo} />
            </LogoContainer>
            <NavigationLinkContainer>
                <NavLink>
                    Home
                </NavLink>
                <NavLink>
                    Portfolio
                </NavLink>
                <NavLink>
                    Blog
                </NavLink>
                <NavLink>
                    Contact
                </NavLink>
            </NavigationLinkContainer>
        </NavigationWrapper>
    )
}

export {NavBar}