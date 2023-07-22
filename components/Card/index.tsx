import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Heading, { HeadingAs, HeadingType } from 'components/commons/Heading';
import Paragraph, { ParagraphType } from 'components/commons/Paragraph';
import Container from 'components/commons/Container';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'primary' | 'secondary' | 'location';
    thumbnail: string;
    title: string;
    description?: string;
    location?: {
        name: string;
        address: string;
        contact: {
            phone: string;
            email: string;
        };
    }
}

const Card: React.FC<IProps> = ({
                                    variant = 'primary', thumbnail, title, description,
                                    location, className, ...props
                                }) => {
    return (
        <article className={cn(styles.card, {
            [styles.primary]: variant === 'primary',
            [styles.secondary]: variant === 'secondary',
            [styles.location]: variant === 'location',
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
                    {description && (
                        <Paragraph className={styles.description}
                                   type={ParagraphType.P2}
                        >
                            {description}
                        </Paragraph>
                    )}
                    {location && (
                        <>
                            <Paragraph className={styles.location}
                                       type={ParagraphType.P2}
                            >
                                <strong>{location.name}</strong><br />
                                {location.address}
                            </Paragraph>
                            <Paragraph className={styles.contact}
                                       type={ParagraphType.P2}
                            >
                                <strong>Contact</strong><br />
                                P : {location.contact.phone}<br/>
                                M : {location.contact.email}
                            </Paragraph>
                        </>
                    )}
                </Container>
            </div>
        </article>
    );
};

export default Card;
