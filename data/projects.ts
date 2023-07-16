export const allProjectCategories: IProjectCategory[] = [
    {
        thumbnail: {
            mobile: '/img/home/mobile/image-web-design.jpg',
            tablet: '/img/home/tablet/image-web-design.jpg',
            desktop: '/img/home/desktop/image-web-design.jpg',
        },
        title: 'Web Design',
        path: '/projects/web-design',
    },
    {
        thumbnail: {
            mobile: '/img/home/mobile/image-app-design.jpg',
            tablet: '/img/home/tablet/image-app-design.jpg',
            desktop: '/img/home/desktop/image-app-design.jpg',
        },
        title: 'App Design',
        path: '/projects/app-design',
    },
    {
        thumbnail: {
            mobile: '/img/home/mobile/image-graphic-design.jpg',
            tablet: '/img/home/tablet/image-graphic-design.jpg',
            desktop: '/img/home/desktop/image-graphic-design.jpg',
        },
        title: 'Graphic Design',
        path: '/projects/graphic-design',
    },
];

export const allProjects: {
    webDesign: IProjectWithHref[];
} = {
    webDesign: [
        {
            thumbnail: '/img/projects/web-design/image-express.jpg',
            title: 'Express',
            description: 'A multi-carrier shipping website for ecommerce businesses',
            href: '#',
        },
        {
            thumbnail: '/img/projects/web-design/image-transfer.jpg',
            title: 'Transfer',
            description: 'Site for low-cost money transfers and sending money within seconds',
            href: '#',
        },
        {
            thumbnail: '/img/projects/web-design/image-photon.jpg',
            title: 'Photon',
            description: 'A state-of-the-art music player with high-resolution audio and DSP effects',
            href: '#',
        },
        {
            thumbnail: '/img/projects/web-design/image-builder.jpg',
            title: 'Builder',
            description: 'Connects users with local contractors based on their location',
            href: '#',
        },
        {
            thumbnail: '/img/projects/web-design/image-blogr.jpg',
            title: 'Blogr',
            description: 'Blogr is a platform for creating an online blog or publication',
            href: '#',
        },
        {
            thumbnail: '/img/projects/web-design/image-camp.jpg',
            title: 'Camp',
            description: 'Get expert training in coding, data, design, and digital marketing',
            href: '#',
        },
    ],
};
