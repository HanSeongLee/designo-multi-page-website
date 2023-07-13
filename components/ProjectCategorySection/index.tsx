import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/commons/Container';
import Link from 'next/link';
import ProjectCategoryCard from 'components/ProjectCategoryCard';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    categories: IProjectCategory[];
}

const ProjectCategorySection: React.FC<IProps> = ({ categories, className, ...props }) => {
    return (
        <section className={cn(styles.projectCateogrySection, className)}
                 {...props}
        >
            <Container className={styles.container}>
                {categories.map((project, index) => (
                    <Link href={project.path}
                          key={index}
                    >
                        <ProjectCategoryCard {...project} />
                    </Link>
                ))}
            </Container>
        </section>
    );
};

export default ProjectCategorySection;
