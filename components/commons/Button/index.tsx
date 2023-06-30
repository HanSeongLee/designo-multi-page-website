import React, { ElementType } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import HamburgerIcon from 'public/icons/icon-hamburger.svg'

export enum ButtonVariant {
    Primary = 'primary',
    Secondary = 'secondary',
    Icon = 'icon',
}

export enum ButtonIcon {
    Hamburger = 'hamburger',
}

interface IProps<T extends ElementType = 'button' | 'a'> {
    as?: T;
    variant: ButtonVariant;
    icon?: ButtonIcon;
    className?: string;
    href?: string;
    onClick?: () => void;
}

const Button: React.FC<IProps> = ({
                                      as = 'button', variant, icon, className,
                                      children, ...props
                                  }) => {
    return React.createElement(as, {
        className: cn(styles.button, {
            [styles.primary]: variant === ButtonVariant.Primary,
            [styles.secondary]: variant === ButtonVariant.Secondary,
            [styles.icon]: variant === ButtonVariant.Icon,
        }, className),
        ...props,
    }, variant === ButtonVariant.Icon ? (<>
        {icon === ButtonIcon.Hamburger && <HamburgerIcon />}
    </>) : children);
};

export default Button;
