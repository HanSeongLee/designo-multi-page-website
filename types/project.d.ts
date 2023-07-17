interface IProjectCategory {
    thumbnail: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    title: string;
    description: string;
    path: string;
}

interface IProject {
    thumbnail: string;
    title: string;
    description: string;
}

interface IProjectWithHref extends IProject {
    href: string;
}
