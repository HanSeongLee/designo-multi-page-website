import React, { ElementType } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

export enum HeadingAs {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
}

export enum HeadingType {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
}

interface IProps <T extends ElementType = HeadingAs> {
    as: T;
    className?: string;
    type: HeadingType;
}

const Heading: React.FC<IProps> = ({
                                       as, className, type, children,
                                       ...props
                                   }) => {
    return React.createElement(
        as,
        {
            className: cn(className, {
                [styles.h1]: type === HeadingType.H1,
                [styles.h2]: type === HeadingType.H2,
                [styles.h3]: type === HeadingType.H3,
            }),
            ...props,
        },
        children
    );
};

export default Heading;
