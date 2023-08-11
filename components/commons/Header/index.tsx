import React, { HTMLAttributes, useEffect, useState } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/commons/Container';
import Logo from 'components/commons/Logo';
import Button, { ButtonIcon, ButtonVariant } from 'components/commons/Button';
import Menu from 'components/commons/Menu';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const Header: React.FC<IProps> = ({ className, ...props }) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const onMenuOpen = () => {
        setMenuOpen(!menuOpen);
    };

    const onResize = () => {
        const header = document.querySelector('header');
        if (!header) {
            return;
        }

        if (window.innerWidth > 768) {
            setMenuOpen(false);
        }
        header.classList.add(styles.stopTransition);
        setTimeout(() => {
            header.classList.remove(styles.stopTransition);
        }, 400);
    };

    useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, []);

    return (
        <header className={cn(styles.header, className)}
                {...props}
        >
            <div className={styles.headerWrapper}>
                <Container className={styles.container}>
                    <div className={styles.wrapper}>
                        <Logo dark />

                        <Menu className={styles.menu}
                              open={menuOpen}
                        />
                    </div>

                    <Button className={styles.menuButton}
                            variant={ButtonVariant.Icon}
                            icon={!menuOpen ? ButtonIcon.Hamburger : ButtonIcon.Close}
                            onClick={onMenuOpen}
                    />
                </Container>
            </div>

            <Menu className={styles.mobileMenu}
                  open={menuOpen}
            />
        </header>
    );
};

export default Header;
