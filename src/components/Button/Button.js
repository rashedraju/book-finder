import React from 'react';
import { PropTypes } from 'prop-types';
import { ButtonOutline, ButtonPrimary } from './Button.styled';

const Button = (props) => {
    const { variant, style = {}, center = false, onClick, children } = props;
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

Button.propTypes = {
    variant: PropTypes.string,
    style: PropTypes.instanceOf(Object),
    center: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node
};

export default Button;
