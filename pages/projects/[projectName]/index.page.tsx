import type { GetStaticProps, NextPage } from 'next'
import styles from './style.module.scss';
import Header from 'components/commons/Header';
import Footer from 'components/commons/Footer';
import CTASection from 'components/CTASection';
import IntroBox from 'components/IntroSection';
import ProjectCategorySection from 'components/ProjectCategorySection';
import ProjectSection from 'components/ProjectSection';
import { allProjectCategories, allProjects } from 'data/projects';

interface IProps {
    projectCategory: IProjectCategory;
    categories: IProjectCategory[];
    projects: IProjectWithHref[];
}

const ProjectPage: NextPage<IProps> = ({ projectCategory, categories, projects }) => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <IntroBox title={projectCategory.title}
                          description={projectCategory.description}
                />
                <ProjectSection projects={projects} />
                <ProjectCategorySection categories={categories} />
                <CTASection />
            </main>
            <Footer />
        </>
    );
};

export const getStaticPaths = async () => {
    const paths = allProjectCategories.map(({ title }) => ({
        params: { projectName: title.toLowerCase().replace(' ', '-') },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const projectName = params?.projectName as 'web-design' | 'app-design' | 'graphic-design';
    const projectCategory = allProjectCategories.find(({ title }) => title.toLowerCase().replace(' ', '-') === projectName);
    const categories = allProjectCategories.filter(({ title }) => title !== projectCategory?.title);
    const projects = allProjects[projectName];
    return { props: { projectCategory, categories, projects } };
};

export default ProjectPage;
