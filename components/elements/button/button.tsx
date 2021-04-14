import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import '@robrichardson13/bit-harmony-tailwindcss.styles.tailwind';

export type ButtonProps = {
    disabled: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
    children,
    disabled,
    ...rest
}: ButtonProps) {
    const className = classNames(
        'rounded-full',
        'py-5 px-12',
        'antialiased text-base font-bold text-white',
        'truncate',
        'focus:outline-none',
        'bg-rob-blue',
        {
            'opacity-50': disabled,
        });

    return (
        <button
            className={className}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    );
}

Button.defaultProps = {
    disabled: false,
};