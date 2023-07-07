import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/commons/Container';
import FeatureCard from 'components/FeatureCard';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    features: IFeature[];
}

const FeatureSection: React.FC<IProps> = ({ features, className, ...props }) => {
    return (
        <section className={cn(styles.featureSection, className)}
                 {...props}
        >
            <Container className={styles.container}>
                {features.map((feature, index) => (
                    <FeatureCard {...feature}
                                 key={index}
                    />
                ))}
            </Container>
        </section>
    );
};

export default FeatureSection;
