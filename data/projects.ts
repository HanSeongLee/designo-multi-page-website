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
    appDesign: IProjectWithHref[];
    graphicDesign: IProjectWithHref[];
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
    appDesign: [
        {
            thumbnail: '/img/projects/app-design/image-airfilter.jpg',
            title: 'Airfilter',
            description: 'Solving the problem of poor indoor air quality by filtering the air',
            href: '#',
        },
        {
            thumbnail: '/img/projects/app-design/image-eyecam.jpg',
            title: 'Eyecam',
            description: 'Product that lets you edit your favorite photos and videos at any time',
            href: '#',
        },
        {
            thumbnail: '/img/projects/app-design/image-faceit.jpg',
            title: 'Faceit',
            description: 'Get to meet your favorite internet superstar with the faceit app',
            href: '#',
        },
        {
            thumbnail: '/img/projects/app-design/image-todo.jpg',
            title: 'Todo',
            description: 'A todo app that features cloud sync with light and dark mode',
            href: '#',
        },
        {
            thumbnail: '/img/projects/app-design/image-loopstudios.jpg',
            title: 'Loopstudios',
            description: 'A VR experience app made for Loopstudios',
            href: '#',
        },
    ],
    graphicDesign: [
        {
            thumbnail: '/img/projects/graphic-design/image-change.jpg',
            title: 'Tim Brown',
            description: 'A book cover designed for Tim Brown’s new release, ‘Change’',
            href: '#',
        },
        {
            thumbnail: '/img/projects/graphic-design/image-boxed-water.jpg',
            title: 'Boxed water',
            description: 'A simple packaging concept made for Boxed Water',
            href: '#',
        },
        {
            thumbnail: '/img/projects/graphic-design/image-science.jpg',
            title: 'Science!',
            description: 'A poster made in collaboration with the Federal Art Project',
            href: '#',
        },
    ],
};
