import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Heading, { HeadingAs, HeadingType } from 'components/commons/Heading';
import Paragraph, { ParagraphType } from 'components/commons/Paragraph';
import Container from 'components/commons/Container';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'primary' | 'secondary' | 'location';
    thumbnail: {
        mobile: string;
        tablet: string;
        desktop: string;
    } | string;
    title: string;
    description?: string;
    location?: {
        name: string;
        address: string;
        contact: {
            phone: string;
            email: string;
        };
    },
    reverse?: boolean;
}

const Card: React.FC<IProps> = ({
                                    variant = 'primary', thumbnail, title, description,
                                    location, reverse, className, ...props
                                }) => {
    return (
        <article className={cn(styles.card, {
            [styles.primary]: variant === 'primary',
            [styles.secondary]: variant === 'secondary',
            [styles.location]: variant === 'location',
            [styles.reverse]: reverse,
        }, className)}
                 {...props}
        >
            {thumbnail && typeof thumbnail === 'string' && (
                <img className={styles.thumbnail}
                     src={thumbnail}
                     alt={''}
                />
            )}
            {thumbnail && typeof thumbnail === 'object' && (
                <picture>
                    <source media={'(min-width: 1339px)'}
                            srcSet={thumbnail.desktop}
                    />
                    <source media={'(min-width: 768px)'}
                            srcSet={thumbnail.tablet}
                    />
                    <source media={'(max-width: 768px)'}
                            srcSet={thumbnail.mobile}
                    />

                    <img className={styles.thumbnail}
                         src={thumbnail.desktop}
                         alt={''}
                    />
                </picture>
            )}
            <div className={styles.body}>
                <Container>
                    <Heading className={styles.title}
                             as={HeadingAs.H2}
                             type={HeadingType.H1}
                    >
                        {title}
                    </Heading>
                    <div className={styles.content}>
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
                                    P : {location.contact.phone}<br />
                                    M : {location.contact.email}
                                </Paragraph>
                            </>
                        )}
                    </div>
                </Container>
            </div>
        </article>
    );
};

export default Card;
