import React from 'react';
import { PropTypes } from 'prop-types';
import { ReactComponent as EmptyImage } from '../../assets/img/empty-image.svg';
import { EmptyWrapper } from './Empty.styled';

const Empty = ({ message }) => (
    <EmptyWrapper>
        <EmptyImage />
        <h3>{message}</h3>
    </EmptyWrapper>
);

Empty.propTypes = {
    message: PropTypes.string
};

export default Empty;
