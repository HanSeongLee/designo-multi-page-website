import React from 'react';
import styles from './style.module.scss';
import { NextPage } from 'next';
import Header from 'components/commons/Header';
import Footer from 'components/commons/Footer';
import Card from 'components/Card';
import CTASection from 'components/CTASection';
import LocationSection from 'components/LocationSection';

const AboutPage: NextPage = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.cardContainer}>
                    <section>
                        <Card thumbnail={{
                            mobile: '/img/about/mobile/image-about-hero.jpg',
                            tablet: '/img/about/tablet/image-about-hero.jpg',
                            desktop: '/img/about/desktop/image-about-hero.jpg',
                        }}
                              title={'About Us'}
                              description={'Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.'}
                        />
                    </section>
                    <section>
                        <Card variant={'secondary'}
                              thumbnail={{
                                  mobile: '/img/about/mobile/image-world-class-talent.jpg',
                                  tablet: '/img/about/tablet/image-world-class-talent.jpg',
                                  desktop: '/img/about/desktop/image-world-class-talent.jpg',
                              }}
                              title={'World-class talent'}
                              description={'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.   \n' +
                                  '\n' +
                                  'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.'}
                        />
                    </section>
                </div>
                <LocationSection />
                <section>
                    <Card variant={'secondary'}
                          thumbnail={{
                              mobile: '/img/about/mobile/image-real-deal.jpg',
                              tablet: '/img/about/tablet/image-real-deal.jpg',
                              desktop: '/img/about/desktop/image-real-deal.jpg',
                          }}
                          title={'The real deal'}
                          description={'As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. ' +
                              'Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.\n' +
                              '\n' +
                              'We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.'}
                    />
                </section>
                <CTASection />
            </main>
            <Footer />
        </>
    );
};

export default AboutPage;
