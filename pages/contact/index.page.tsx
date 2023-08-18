import React from 'react';
import styles from './style.module.scss';
import { NextPage } from 'next';
import Header from 'components/commons/Header';
import Footer from 'components/commons/Footer';
import LocationSection from 'components/LocationSection';
import IntroSection from 'components/IntroSection';
import ContactFormContainer from 'containers/forms/ContactFormContainer';

const ContactPage: NextPage = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <IntroSection title={'Contact Us'}
                              description={'Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.'}
                              size={'large'}
                >
                    <ContactFormContainer className={styles.contactFormContainer} />
                </IntroSection>
                <LocationSection />
            </main>
            <Footer className={styles.footer} />
        </>
    );
};

export default ContactPage;
