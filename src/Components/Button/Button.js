import './Button.scss';

import React from 'react';

function Button({ children, linearGradient, linearGradientTwo, className = '', disabled, onClick, ...props }) {
    return (
        <button
            {...props}
            onClick={onClick}
            disabled={disabled}
            className={` flex justify-center items-center w-full bg-[#121916] py-3 rounded-full text-sm text-center ${className} ${
                linearGradient
                    ? 'custom-button-linear-gradient'
                    : linearGradientTwo
                    ? 'custom-button-linear-gradient-two'
                    : 'custom-button'
            }  `}
        >
            {children}
        </button>
    );
}

export default Button;
