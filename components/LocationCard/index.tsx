import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import Button, { ButtonVariant } from 'components/commons/Button';
import Heading, { HeadingAs, HeadingType } from 'components/commons/Heading';
import cn from 'classnames';
import { ILocation } from 'types/location';

interface IProps extends HTMLAttributes<HTMLDivElement>, ILocation {

}

const LocationCard: React.FC<IProps> = ({
                                            image, name, href, className,
                                            ...props
                                        }) => {
    return (
        <article className={cn(styles.locationCard, className)}
                 {...props}
        >
            <div className={styles.imageWrapper}>
                {image}
            </div>
            <Heading className={styles.name}
                     as={HeadingAs.H2}
                     type={HeadingType.H3}
            >
                {name}
            </Heading>
            <Button as={'a'}
                    variant={ButtonVariant.Primary}
                    href={href}
            >
                See Location
            </Button>
        </article>
    );
};

export default LocationCard;
