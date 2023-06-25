import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLAnchorElement> {
    dark?: boolean;
}

const Logo: React.FC<IProps> = ({ dark=false, className, ...props }) => {
    return (
        <Link className={cn(styles.logo, className)}
              href={'/'}
              {...props}
        >
            <h1>
                <img src={!dark ? '/logo-light.png' : '/logo-dark.png'}
                     alt={'designo'}
                />
            </h1>
        </Link>
    );
};

export default Logo;
