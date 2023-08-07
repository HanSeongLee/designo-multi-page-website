import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Heading, { HeadingAs, HeadingType } from 'components/commons/Heading';
import Paragraph, { ParagraphType } from 'components/commons/Paragraph';

interface IProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>, IProject {

}

const ProjectCard: React.FC<IProps> = ({
                                           thumbnail, title, description, className,
                                           ...props
                                       }) => {
    return (
        <article className={cn(styles.projectCard, className)}
                 {...props}
        >
            <div className={styles.thumbnailWrapper}>
                <img className={styles.thumbnail}
                     src={thumbnail}
                     alt={''}
                />
            </div>
            <div className={styles.content}>
                <Heading className={styles.title}
                         as={HeadingAs.H2}
                         type={HeadingType.H3}
                >
                    {title}
                </Heading>
                <Paragraph className={styles.description}
                           type={ParagraphType.P1}
                >
                    {description}
                </Paragraph>
            </div>
        </article>
    );
};

export default ProjectCard;
