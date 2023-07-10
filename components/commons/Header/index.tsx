import React, { HTMLAttributes, useState } from 'react';
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

    return (
        <header className={cn(styles.header, className)}
                {...props}
        >
            <div className={styles.headerWrapper}>
                <Container className={styles.container}>
                    <Logo dark />

                    <Button variant={ButtonVariant.Icon}
                            icon={!menuOpen ? ButtonIcon.Hamburger : ButtonIcon.Close}
                            onClick={onMenuOpen}
                    />
                </Container>
            </div>

            <Menu open={menuOpen} />
        </header>
    );
};

export default Header;
