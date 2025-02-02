import { Tag } from "./Tag";

export interface Project {
    id: number;
    name: string;
    summery: string;
    description: string;
    projectLink: string;
    pictures: string[];
    tags: Tag[];
}