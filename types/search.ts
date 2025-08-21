import type { User } from './user.ts';

export interface Search {
    lastPage: number;
    packages: Package[];
    q: string;
}

export interface NPMSearch {
    objects: {
        package: Package;
    }[];
}

interface Package {
    date: string;
    description?: string;
    keywords?: string[];
    name: string;
    publisher: User;
    version: string;
}
