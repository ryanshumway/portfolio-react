import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { size } from '../../theme/theme';

const StyledCardHeader = styled.div`
    padding: ${size.LG},
`

function CardHeader({ title }) {
    return (
        <StyledCardHeader>
            <h3>{title}</h3>
        </StyledCardHeader>
    )
}

CardHeader.propTypes = {
    title: PropTypes.string,
}

CardHeader.defaultProps = {
    title: '',
}

export { CardHeader }