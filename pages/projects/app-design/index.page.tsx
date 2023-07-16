import type { NextPage } from 'next'
import styles from './style.module.scss';
import Header from 'components/commons/Header';
import Footer from 'components/commons/Footer';
import CTASection from 'components/CTASection';
import IntroBox from 'components/IntroSection';
import { allProjectCategories, allProjects } from 'data/projects';
import ProjectCategorySection from 'components/ProjectCategorySection';
import ProjectSection from 'components/ProjectSection';

const AppDesignPage: NextPage = () => {
    const categories = allProjectCategories.filter(({ title }) => title !== 'App Design');

    return (
        <>
            <Header />
            <main className={styles.main}>
                <IntroBox title={'App Design'}
                          description={'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'}
                />
                <ProjectSection projects={allProjects.appDesign} />
                <ProjectCategorySection categories={categories} />
                <CTASection />
            </main>
            <Footer />
        </>
    );
};

export default AppDesignPage;
