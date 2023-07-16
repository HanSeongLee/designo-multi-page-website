import type { NextPage } from 'next'
import styles from './style.module.scss';
import Header from 'components/commons/Header';
import Footer from 'components/commons/Footer';
import CTASection from 'components/CTASection';
import IntroBox from 'components/IntroSection';
import { allProjectCategories, allProjects } from 'data/projects';
import ProjectCategorySection from 'components/ProjectCategorySection';
import ProjectSection from 'components/ProjectSection';

const GraphicDesignPage: NextPage = () => {
    const categories = allProjectCategories.filter(({ title }) => title !== 'Graphic Design');

    return (
        <>
            <Header />
            <main className={styles.main}>
                <IntroBox title={'Graphic Design'}
                          description={'We deliver eye-catching branding materials that are tailored to meet your business objectives.'}
                />
                <ProjectSection projects={allProjects.graphicDesign} />
                <ProjectCategorySection categories={categories} />
                <CTASection />
            </main>
            <Footer />
        </>
    );
};

export default GraphicDesignPage;
