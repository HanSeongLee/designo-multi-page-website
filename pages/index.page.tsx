import type { NextPage } from 'next'
import styles from './style.module.scss';
import Header from 'components/commons/Header';
import HeroSection from 'components/home/HeroSection';
import ProjectSection from 'components/ProjectSection';
import FeatureSection from 'components/home/FeatureSection';
import Footer from 'components/commons/Footer';
import CTASection from 'components/CTASection';
import { allProjects } from 'data/projects';

const Home: NextPage = () => {
    const features: IFeature[] = [
        {
            thumbnail: '/img/home/illustration-passionate.svg',
            title: 'Passionate',
            description: 'GrEach project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
        },
        {
            thumbnail: '/img/home/illustration-resourceful.svg',
            title: 'Resourceful',
            description: 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
        },
        {
            thumbnail: '/img/home/illustration-friendly.svg',
            title: 'Friendly',
            description: ' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
        },
    ]

    return (
        <>
            <Header />
            <main className={styles.main}>
                <HeroSection />
                <ProjectSection projects={allProjects} />
                <FeatureSection features={features} />
                <CTASection />
            </main>
            <Footer />
        </>
    );
}

export default Home;
