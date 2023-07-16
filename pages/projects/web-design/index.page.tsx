import type { NextPage } from 'next'
import styles from './style.module.scss';
import Header from 'components/commons/Header';
import Footer from 'components/commons/Footer';
import CTASection from 'components/CTASection';
import IntroBox from 'components/IntroSection';
import { allProjectCategories, allProjects } from 'data/projects';
import ProjectCategorySection from 'components/ProjectCategorySection';
import ProjectSection from 'components/ProjectSection';

const WebDesignPage: NextPage = () => {
    const categories = allProjectCategories.filter(({ title }) => title !== 'Web Design');

    return (
        <>
            <Header />
            <main className={styles.main}>
                <IntroBox title={'Web Design'}
                          description={'We build websites that serve as powerful marketing tools and bring memorable brand experiences.'}
                />
                <ProjectSection projects={allProjects.webDesign} />
                <ProjectCategorySection categories={categories} />
                <CTASection />
            </main>
            <Footer />
        </>
    );
};

export default WebDesignPage;
