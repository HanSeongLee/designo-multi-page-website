interface IProjectCategory {
    thumbnail: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    title: string;
    path: string;
}

interface IProject {
    thumbnail: string;
    title: string;
    description: string;
}
