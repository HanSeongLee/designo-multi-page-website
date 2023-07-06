import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Heading, { HeadingAs, HeadingType } from 'components/commons/Heading';
import Paragraph, { ParagraphType } from 'components/commons/Paragraph';

interface IProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>, IFeature {

}

const FeatureCard: React.FC<IProps> = ({
                                           thumbnail, title, description, className,
                                           ...props
                                       }) => {
    return (
        <article className={cn(styles.featureCard, className)}
                 {...props}
        >
            <div className={styles.illustrationWrapper}>
                <img className={styles.illustration}
                     src={thumbnail}
                     alt={''}
                />
            </div>
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
        </article>
    );
};

export default FeatureCard;
