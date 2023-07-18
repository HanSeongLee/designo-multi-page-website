import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Heading, { HeadingAs, HeadingType } from 'components/commons/Heading';
import Paragraph, { ParagraphType } from 'components/commons/Paragraph';
import Container from 'components/commons/Container';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'primary' | 'secondary';
    thumbnail: string;
    title: string;
    description: string;
}

const Card: React.FC<IProps> = ({
                                    variant = 'primary', thumbnail, title, description,
                                    className, ...props
                                }) => {
    return (
        <article className={cn(styles.card, {
            [styles.primary]: variant === 'primary',
            [styles.secondary]: variant === 'secondary',
        }, className)}
                 {...props}
        >
            <img className={styles.thumbnail}
                 src={thumbnail}
                 alt={''}
            />
            <div className={styles.body}>
                <Container>
                    <Heading className={styles.title}
                             as={HeadingAs.H2}
                             type={HeadingType.H1}
                    >
                        {title}
                    </Heading>
                    <Paragraph className={styles.description}
                               type={ParagraphType.P2}
                    >
                        {description}
                    </Paragraph>
                </Container>
            </div>
        </article>
    );
};

export default Card;
