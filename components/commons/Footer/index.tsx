import React, { HTMLAttributes, ReactNode } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/commons/Container';
import Logo from 'components/commons/Logo';
import Link from 'next/link';
import FacebookIcon from '/public/icons/icon-facebook.svg';
import YoutubeIcon from '/public/icons/icon-youtube.svg';
import TwitterIcon from '/public/icons/icon-twitter.svg';
import PinterestIcon from '/public/icons/icon-pinterest.svg';
import InstagramIcon from '/public/icons/icon-instagram.svg';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const Footer: React.FC<IProps> = ({ className, ...props }) => {
    const sitemap: { name: string, link: string; }[] = [
        {
            name: 'Our company',
            link: '#',
        },
        {
            name: 'Locations',
            link: '#',
        },
        {
            name: 'Contact',
            link: '#',
        },
    ];

    const socials: { name: string, link: string; icon: ReactNode; }[] = [
        {
            name: 'Facebook',
            link: '#',
            icon: (<FacebookIcon />),
        },
        {
            name: 'Youtube',
            link: '#',
            icon: (<YoutubeIcon />),
        },
        {
            name: 'Twitter',
            link: '#',
            icon: (<TwitterIcon />),
        },
        {
            name: 'Pinterest',
            link: '#',
            icon: (<PinterestIcon />),
        },
        {
            name: 'Instagram',
            link: '#',
            icon: (<InstagramIcon />),
        },
    ];

    return (
        <footer className={cn(styles.footer, className)}
                {...props}
        >
            <Container className={styles.container}>
                <div className={styles.logoAndSitemap}>
                    <Logo />
                    <ul className={styles.sitemapContainer}>
                        {sitemap.map(({ name, link }, index) => (
                            <li className={styles.linkItem}
                                key={index}
                            >
                                <Link href={link}>
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.infoAndSocial}>
                    <address className={styles.address}>
                        <strong>Designo Central Office</strong><br />
                        3886 Wellington Street<br />
                        Toronto, Ontario M9C 3J5<br />
                    </address>

                    <address className={styles.address}>
                        <strong>Contact Us (Central Office)</strong><br />
                        P : +1 253-863-8967<br />
                        M : contact@designo.co<br />
                    </address>

                    <ul className={styles.socialContainer}>
                        {socials.map(({ name, link, icon }, index) => (
                            <li className={styles.socialItem}
                                key={index}
                                title={name}
                            >
                                <a href={link}
                                   target={'_blank'}
                                >
                                    {icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
