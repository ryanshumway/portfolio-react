import { css } from 'styled-components'

export const darkTheme = {
    transparent: "",
    primary: '#1f2324',
    secondary: '#282d2e',
    focus: '#eb5e55',
    yellow: '#E1CA96',

    red100: '#F4A9A4',
    red200: '#F0877F',
    red300: '#EB5E55',
    red400: '#E74236',
    red500: '#DB271A',
    red600: '#B72015',
    red700: '#921A11',

    purple100: '#9C33FF',
    purple200: '#890AFF',
    purple300: '#7400E0',
    purple400: '#5F00BA',
    purple500: '#4A008F',
    purple600: '#350066',
    purple700: '#20003D',
}

export const gradient = {
    gradient: 'linear-gradient(90deg, hsla(4, 79%, 63%, 1) 0%, hsla(233, 89%, 60%, 1) 100%)',
}

export const size = {
    SM: '4px',
    MD: '8px',
    LG: '12px',
    XL: '16px',
    XXL: '20px',
    XXXL: '24px',
    circle: '50%',
}
    

export const transitionMain = css`
    transition: all ease-in-out 0.2s;
`