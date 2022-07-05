import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { size } from '../../theme/theme';

const StyledCardBody = styled.p`
    color: red;
`

function CardBody({ text }) {
    return (
        <StyledCardBody>
            {text}
        </StyledCardBody>
    )
}

CardBody.propTypes = {
    title: PropTypes.string,
}

CardBody.defaultProps = {
    title: '',
}

export { CardBody }