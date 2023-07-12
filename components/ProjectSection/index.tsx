import React, { HTMLAttributes } from 'react';
import styles from 'components/ProjectSection/style.module.scss';
import cn from 'classnames';
import Container from 'components/commons/Container';
import ProjectCard from 'components/ProjectCard';
import Link from 'next/link';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    projects: IProject[];
}

const ProjectSection: React.FC<IProps> = ({ projects, className, ...props }) => {
    return (
        <section className={cn(styles.projectSection, className)}
                 {...props}
        >
            <Container className={styles.container}>
                {projects.map((project, index) => (
                    <Link href={project.path}
                          key={index}
                    >
                        <ProjectCard {...project} />
                    </Link>
                ))}
            </Container>
        </section>
    );
};

export default ProjectSection;
