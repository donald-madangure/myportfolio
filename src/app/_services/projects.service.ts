import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project [] = [
    {id: 0,name: "Healthcare Analytics Dashboard (Angular + Docker)",summery: 'Product management system app ',description: 'lorem',projectLink: '//.www.github.com',pictures: ["assets/myarea.jpg","assets/mydesk.jpg","assets/myrise.jpg"], tags: [Tag.ANGULAR, Tag.NGZORRO, Tag.RxJS]},
    {id: 1,name: "Sample Angualr App 2",summery: 'Web app developed using Angular and Node.Js',description: 'lorem',projectLink: '//.www.github.com',pictures: ["assets/myarea.jpg","assets/mydesk.jpg","assets/myrise.jpg"], tags: [Tag.ANGULAR, Tag.RxJS, Tag.NGZORRO]},
    {id: 2,name: "Sample React App 1",summery: 'Fullstack web app developed using React and Node.JS',description: 'lorem',projectLink: '//.www.github.com',pictures: ["assets/myarea.jpg","assets/mydesk.jpg","assets/myrise.jpg"], tags: [Tag.REACT, Tag.NGZORRO]},
    {id: 3,name: "Sample React App 2",summery: 'Web API project that was developed for a class project',description: 'lorem',projectLink: '//.www.github.com',pictures: ["assets/myarea.jpg","assets/mydesk.jpg","assets/myrise.jpg"], tags: [Tag.CSHARP, Tag.ASPNET]},
    {id: 4,name: "Chrom Extensions",summery: 'Developed a chrome extention that tracks the prices of furniture',description: 'lorem',projectLink: '//.www.github.com',pictures: ["assets/myarea.jpg","assets/mydesk.jpg","assets/myrise.jpg"], tags: [Tag.JAVASCRIPT]},
    {id: 5,name: "Sample Java Project",summery: 'Java project that analyzes stock market and data trends',description: 'lorem',projectLink: '//.www.github.com',pictures: ["assets/myarea.jpg","assets/mydesk.jpg","assets/myrise.jpg"], tags: [Tag.JAVA]},
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
