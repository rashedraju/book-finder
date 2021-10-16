import React from 'react';
import { ButtonOutline, ButtonPrimary } from './Button.styled';

const Button = ({ variant, style = {}, center, onClick, children }) => {
    if (variant === 'outline')
        return (
            <ButtonOutline onClick={onClick} style={style} center={center ? 1 : 0}>
                {' '}
                {children}{' '}
            </ButtonOutline>
        );

    return (
        <ButtonPrimary onClick={onClick} center={center ? 1 : 0} style={style}>
            {' '}
            {children}{' '}
        </ButtonPrimary>
    );
};

export default Button;
