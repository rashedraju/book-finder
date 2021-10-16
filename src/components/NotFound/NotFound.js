import React from 'react';
import { PropTypes } from 'prop-types';
import { ReactComponent as Image } from '../../assets/img/empty-image.svg';
import { Wrapper } from './NotFound.styled';

const NotFound = ({ message }) => (
    <Wrapper>
        <Image />
        <h3>{message}</h3>
    </Wrapper>
);

NotFound.propTypes = {
    message: PropTypes.string
};

export default NotFound;
