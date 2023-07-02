import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/commons/Container';
import Heading, { HeadingAs, HeadingType } from 'components/commons/Heading';
import Paragraph, { ParagraphType } from 'components/commons/Paragraph';
import Button, { ButtonVariant } from 'components/commons/Button';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const HeroSection: React.FC<IProps> = ({ className, ...props }) => {
    return (
        <section className={cn(styles.heroSection, className)}>
            <Container className={styles.container}>
                <div className={styles.content}>
                    <Heading className={styles.title}
                             as={HeadingAs.H2}
                             type={HeadingType.H1}
                    >
                        Award-winning custom designs and digital branding solutions
                    </Heading>
                    <Paragraph className={styles.description}
                               type={ParagraphType.P2}
                    >
                        With over 10 years in the industry, we are experienced in creating fully responsive websites,
                        app
                        design, and engaging brand experiences. Find out more about our services.
                    </Paragraph>
                    <Button variant={ButtonVariant.Secondary}>
                        Learn More
                    </Button>
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;
