import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project [] = [
    {id: 0,name: "Healthcare Analytics Dashboard (Angular + Docker)",summery: 'Visualisation and informative experience',description: 'lorem',projectLink: 'https://github.com/donald-madangure',pictures: ["assets/mydesk.jpg","assets/dashboard.jpg","assets/docter.jpg"], tags: [Tag.ANGULAR, Tag.NGZORRO, Tag.RxJS]},
    {id: 1,name: "E - Commerce Platform (CI/CD)",summery: 'Products pages, filters, a shoping cart and chekout process',description: 'lorem',projectLink: '//.www.github.com',pictures: ["assets/ecom.jpg","assets/ecom-m.jpg","assets/ecom-mm.jpg"], tags: [Tag.ANGULAR, Tag.RxJS, Tag.NGZORRO]},
    {id: 2,name: "Fitness Tracker App",summery: 'Tracking workouts, logging progress and settings goals',description: 'lorem',projectLink: '//.www.github.com',pictures: ["assets/fit1.jpg","assets/fit2.jpg","assets/fit3.jpg"], tags: [Tag.REACT, Tag.Typescript, Tag.TailwindCSS]},
    {id: 3,name: "Recipe Finder App",summery: 'Search functionality, filtering by ingredients or diet preferences',description: 'lorem',projectLink: '//.www.github.com',pictures: ["assets/recipe1.jpg","assets/recipe2.jpg","assets/recipe3.jpg"], tags: [Tag.REACT, Tag.JAVASCRIPT, Tag.Bootstrap]},
    {id: 4,name: "Chrom Extension",summery: 'Developed a chrome extention that tracks live stock prices',description: 'lorem',projectLink: '//.www.github.com',pictures: ["assets/myarea.jpg","assets/mydesk.jpg","assets/chrome-extension.jpg"], tags: [Tag.JAVASCRIPT]},
    {id: 5,name: "Java Project",summery: 'Java project that analyzes stock market and data trends',description: 'lorem',projectLink: '//.www.github.com',pictures: ["assets/myarea.jpg","assets/mydesk.jpg","assets/myrise.jpg"], tags: [Tag.JAVA]},
  ];
  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectsById(id: number): Project{
    let project = this.projects.find(project => project.id === id);

    if (project === undefined){
      throw new TypeError('There is no project that matches the id: ' + id)
    }
    return project;
  }
  GetProjectsByFilter(filterTags: Tag[]){
   let filteredProjects: Project[] = [];

   this.projects.forEach(function(project){
    let foundAll = true;

   filterTags.forEach(function(filterTag){
    if (project.tags.includes(filterTag) == false){
      foundAll = false;
    }
   });
   if (foundAll){
    filteredProjects.push(project);  
  }
   });
   return filteredProjects;
  }
}
