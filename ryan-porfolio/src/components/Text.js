import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledText = styled.p`
    text-align: ${(props) => (props.align ? props.align : 'left')};
    color: ${(props) => (props.color ? props.color : 'black')};
    font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
    font-size: ${(props) => (props.size ? props.size : 'normal')}
`

function Text(text, align, color, size, weight) {
    return (
        <StyledText align={align} color={color} size={size} weight={weight}>
           {text}
        </StyledText>
    )
}

Text.propTypes = {
    text: PropTypes.string,
    align: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    weight: PropTypes.number,
}

Text.defaultProps = {
    align: 'left',
    text: '',
    color: 'white',
    weight: 400,
    size: '24px',
}

export { Text }