import React from 'react';
import { ReactComponent as EmptyImage } from '../../assets/img/empty-image.svg';
import { EmptyWrapper } from './Empty.styled';

const Empty = ({ message }) => (
    <EmptyWrapper>
        <EmptyImage />
        <h3>{message}</h3>
    </EmptyWrapper>
);

export default Empty;
