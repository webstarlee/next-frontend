import React from 'react';
import classNames from 'classnames';
import styles from '@/styles/Button.module.css'

interface ButtonProps {
    onClick: () => void;
    disabled?: boolean;
    circleBtn?: boolean;
    iconBtn?: boolean;
    className?: string;
    size?: string;
    children?: React.ReactNode;
    fullWidth?: boolean;
    outline?: boolean;
    color?: string
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    disabled = false,
    children,
    circleBtn,
    iconBtn,
    className,
    size,
    fullWidth,
    outline,
    color
}) => {

    const buttonClassNames = classNames(styles.btn, className,{
        [styles.circle]: circleBtn,
        [styles.icon]: iconBtn,
        [styles[`btn-${size}`]]: size? true: false,
        [styles.fullWidth]: fullWidth,
        [styles.outline]: outline,
        [styles[`text-${color}`]]: color? true: false,
        [styles.disabled]: disabled,
    })

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={buttonClassNames}
        >
            {children}
        </button>
    );
};

export default Button;