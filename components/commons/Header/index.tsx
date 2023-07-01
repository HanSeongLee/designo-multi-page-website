import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/commons/Container';
import Logo from 'components/commons/Logo';
import Button, { ButtonIcon, ButtonVariant } from 'components/commons/Button';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const Header: React.FC<IProps> = ({ className, ...props }) => {
    return (
        <header className={cn(styles.header, className)}
                {...props}
        >
            <Container className={styles.container}>
                <Logo dark />

                <Button variant={ButtonVariant.Icon}
                        icon={ButtonIcon.Hamburger}
                />
            </Container>
        </header>
    );
};

export default Header;
