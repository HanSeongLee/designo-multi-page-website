import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

export enum ParagraphType {
    P1='p1',
    P2='p2',
}

interface IProps extends HTMLAttributes<HTMLParagraphElement> {
    type: ParagraphType;
}

const Paragraph: React.FC<IProps> = ({ type, className, children, ...props }) => {
    return (
        <p className={cn({
            [styles.p1]: type === ParagraphType.P1,
            [styles.p2]: type === ParagraphType.P2,
        }, className)}
           {...props}
        >
            {children}
        </p>
    );
};

export default Paragraph;
