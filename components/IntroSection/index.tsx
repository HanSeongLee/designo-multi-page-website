import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/commons/Container';
import Heading, { HeadingAs, HeadingType } from 'components/commons/Heading';
import Paragraph, { ParagraphType } from 'components/commons/Paragraph';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
    size?: 'small' | 'large';
}

const IntroBox: React.FC<IProps> = ({
                                        title, description, size = 'small', className,
                                        children, ...props
                                    }) => {
    return (
        <section className={cn(styles.introBox, {
            [styles.small]: size === 'small',
            [styles.large]: size === 'large',
        }, className)}
                 {...props}
        >
            <Container>
                {title && (
                    <Heading className={styles.title}
                             as={HeadingAs.H2}
                             type={HeadingType.H1}
                    >
                        {title}
                    </Heading>
                )}
                {description && (
                    <Paragraph className={styles.description}
                               type={ParagraphType.P2}
                    >
                        {description}
                    </Paragraph>
                )}
                {children}
            </Container>
        </section>
    );
};

export default IntroBox;
