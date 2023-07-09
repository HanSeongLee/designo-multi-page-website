import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/commons/Container';
import CTABox from 'components/CTABox';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const CTASection: React.FC<IProps> = ({ className, ...props }) => {
    return (
        <section className={cn(styles.ctaSection, className)}
                 {...props}
        >
            <Container className={styles.container}>
                <CTABox title={'Let’s talk about your project'}
                        description={'Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.'}
                        buttonName={'Get in touch'}
                        link={'/contact'}
                />
            </Container>
        </section>
    );
};

export default CTASection;
