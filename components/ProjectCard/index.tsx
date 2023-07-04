import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Heading, { HeadingAs, HeadingType } from 'components/commons/Heading';
import Link from 'next/link';
import RightArrowIcon from '/public/icons/icon-right-arrow.svg';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    thumbnail: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    title: string;
    path: string;
}

const ProjectCard: React.FC<IProps> = ({
                                           thumbnail, title, path, className,
                                           ...props
                                       }) => {
    return (
        <article className={cn(styles.projectCard, className)}
                 style={{
                     '--mobile-thumbnail': `url(${thumbnail.mobile})`,
                     '--tablet-thumbnail': `url(${thumbnail.tablet})`,
                     '--desktop-thumbnail': `url(${thumbnail.desktop})`,
                 } as React.CSSProperties}
                 {...props}
        >
            <Heading className={styles.title}
                     as={HeadingAs.H2}
                     type={HeadingType.H2}
            >
                {title}
            </Heading>
            <Link className={styles.link}
                  href={path}
            >
                View Projects <RightArrowIcon />
            </Link>
        </article>
    );
};

export default ProjectCard;
