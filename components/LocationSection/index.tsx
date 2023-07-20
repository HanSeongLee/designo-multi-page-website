import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import Container from 'components/commons/Container';
import LocationCard from 'components/LocationCard';
import CanadaIllustration from 'public/img/illustration-canada.svg';
import AustraliaIllustration from 'public/img/illustration-australia.svg';
import UKIllustration from 'public/img/illustration-united-kingdom.svg';
import { ILocation } from 'types/location';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const LocationSection: React.FC<IProps> = ({ className, ...props }) => {
    const locations: ILocation[] = [
        {
            image: <CanadaIllustration />,
            name: 'Canada',
            href: '/locations/#canada',
        },
        {
            image: <AustraliaIllustration />,
            name: 'Australia',
            href: '/locations/#australia',
        },
        {
            image: <UKIllustration />,
            name: 'United Kingdom',
            href: '/locations/#united-kingdom',
        },
    ];

    return (
        <section className={cn(styles.locationSection, className)}
                 {...props}
        >
            <Container className={styles.container}>
                {locations.map((location, index) => (
                    <LocationCard {...location}
                                  key={index}
                    />
                ))}
            </Container>
        </section>
    );
};

export default LocationSection;
