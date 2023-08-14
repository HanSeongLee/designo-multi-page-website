import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Heading, { HeadingAs, HeadingType } from 'components/commons/Heading';
import Paragraph, { ParagraphType } from 'components/commons/Paragraph';
import Button, { ButtonVariant } from 'components/commons/Button';

interface IProp extends HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
    buttonName: string;
    link: string;
}

const CTABox: React.FC<IProp> = ({
                                     title, description, buttonName, link,
                                     className, ...props
                                 }) => {
    return (
        <div className={cn(styles.ctaBox, className)}
             {...props}
        >
            <div>
                <Heading className={styles.title}
                         as={HeadingAs.H2}
                         type={HeadingType.H1}
                >
                    {title}
                </Heading>
                <Paragraph className={styles.description}
                           type={ParagraphType.P2}
                >
                    {description}
                </Paragraph>
            </div>
            <Button as={'a'}
                    href={link}
                    variant={ButtonVariant.Secondary}
            >
                {buttonName}
            </Button>
        </div>
    );
};

export default CTABox;
