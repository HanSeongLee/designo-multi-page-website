import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import Container from 'components/commons/Container';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    open: boolean;
}

const Menu: React.FC<IProps> = ({ open, className, ...props }) => {
    const menu: { name: string, link: string; }[] = [
        {
            name: 'Our company',
            link: '/about',
        },
        {
            name: 'Locations',
            link: '/locations',
        },
        {
            name: 'Contact',
            link: '/contact',
        },
    ];

    return (
        <nav className={cn(styles.menu, {
            [styles.open]: open,
        }, className)}
        >
            <div className={styles.overlay}></div>
            <div className={styles.menuWrapper}>
                <Container className={styles.container}>
                    <ul className={styles.menuList}>
                        {menu.map(({ name, link }, index) => (
                            <li className={styles.menuItem}
                                key={index}
                            >
                                <Link className={styles.link}
                                      href={link}>
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Container>
            </div>
        </nav>
    );
};

export default Menu;
