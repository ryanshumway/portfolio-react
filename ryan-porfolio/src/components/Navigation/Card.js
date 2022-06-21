import React from 'react';
import styled from 'styled-components'
import { darkTheme, size } from '../../theme/theme'
import { CardList } from '../CardList';

const CardWrapper = styled.div`
    background-color: ${darkTheme.secondary};
    border-radius: ${size.LG};
    padding: ${size.XL};
`

const CardHeader = styled.p`
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 24px;
    color: ${darkTheme.red300};

`

const CardBullet = styled.p`
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    color: ${darkTheme.red200};
`



function Card(props) {
    return (
        <CardWrapper>
            <CardHeader>
                {props.title}
            </CardHeader>
            <CardBullet>
                {CardList}
            </CardBullet>
        </CardWrapper>
    )
}

export { Card }