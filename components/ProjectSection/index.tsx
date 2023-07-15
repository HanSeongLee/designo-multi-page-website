import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/commons/Container';
import ProjectCard from 'components/ProjectCard';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    projects: IProjectWithHref[];
}

const ProjectSection: React.FC<IProps> = ({ projects, className, ...props }) => {
    return (
        <section className={cn(styles.projectSection, className)}
                 {...props}
        >
            <Container className={styles.container}>
                {projects.map(({ href, ...props }, index) => (
                    <a href={href}
                       target={'_blank'}
                       key={index}
                    >
                        <ProjectCard {...props} />
                    </a>
                ))}
            </Container>
        </section>
    );
};

export default ProjectSection;
