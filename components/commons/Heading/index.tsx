import React, { ElementType } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps <T extends ElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> {
    as: T;
    className?: string;
    type: 'h1' | 'h2' | 'h3';
}

const Heading: React.FC<IProps> = ({
                                       as, className, type, children,
                                       ...props
                                   }) => {
    return React.createElement(
        as,
        {
            className: cn(className, {
                [styles.h1]: type === 'h1',
                [styles.h2]: type === 'h2',
                [styles.h3]: type === 'h3',
            }),
            ...props,
        },
        children
    );
};

export default Heading;
