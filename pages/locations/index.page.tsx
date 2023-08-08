import React from 'react';
import styles from './style.module.scss';
import { NextPage } from 'next';
import Header from 'components/commons/Header';
import Footer from 'components/commons/Footer';
import Card from 'components/Card';
import CTASection from 'components/CTASection';

const LocationPage: NextPage = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.locationSection}>
                    <Card id={'canada'}
                          variant={'location'}
                          thumbnail={{
                              mobile: '/img/locations/desktop/image-map-canada.png',
                              tablet: '/img/locations/tablet/image-map-canada.png',
                              desktop: '/img/locations/desktop/image-map-canada.png',
                          }}
                          title={'Canada'}
                          location={{
                              name: 'Designo Central Office',
                              address: '3886 Wellington Street \nToronto, Ontario M9C 3J5',
                              contact: {
                                  phone: '+1 253-863-8967',
                                  email: 'contact@designo.co',
                              }
                          }}
                    />
                    <Card id={'australia'}
                          variant={'location'}
                          thumbnail={{
                              mobile: '/img/locations/desktop/image-map-australia.png',
                              tablet: '/img/locations/tablet/image-map-australia.png',
                              desktop: '/img/locations/desktop/image-map-australia.png',
                          }}
                          title={'Australia'}
                          location={{
                              name: 'Designo AU Office',
                              address: '19 Balonne Street \nNew South Wales 2443',
                              contact: {
                                  phone: '(02) 6720 9092',
                                  email: 'contact@designo.au',
                              }
                          }}
                    />
                    <Card id={'united-kingdom'}
                          variant={'location'}
                          thumbnail={{
                              mobile: '/img/locations/desktop/image-map-united-kingdom.png',
                              tablet: '/img/locations/tablet/image-map-uk.png',
                              desktop: '/img/locations/desktop/image-map-united-kingdom.png',
                          }}
                          title={'United Kingdom'}
                          location={{
                              name: 'Designo UK Office',
                              address: '13 Colorado Way \nRhyd-y-fro SA8 9GA',
                              contact: {
                                  phone: '078 3115 1400',
                                  email: 'contact@designo.uk',
                              }
                          }}
                    />
                </section>
                <CTASection />
            </main>
            <Footer />
        </>
    );
};

export default LocationPage;
