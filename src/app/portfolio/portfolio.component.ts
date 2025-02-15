import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{

  projects= {} as Project[];

  isCollapsed: boolean = true;
  rxjs: boolean = false;
  angular: boolean = false;
  javascript: boolean = false;
  typescript: boolean = false;
  bootstrap: boolean = false;
  java: boolean = false;
  ngzorro: boolean = false;
  tailwind: boolean = false;
  react: boolean = false;
  filtering: boolean = false;


  constructor(private titleService:Title, private projectService: ProjectsService){
    this.titleService.setTitle('Donald Madangure - Portfolio')
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter(){
    let filterTags: Tag[] = [];

    if(this.rxjs){
      filterTags.push(Tag.RxJS)
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR)
    }
    if(this.java){
      filterTags.push(Tag.JAVA)
    }
    if(this.typescript){
      filterTags.push(Tag.Typescript)
    }
    if(this.ngzorro){
      filterTags.push(Tag.NGZORRO)
    }
    if(this.bootstrap){
      filterTags.push(Tag.Bootstrap)
    }
    if(this.tailwind){
      filterTags.push(Tag.TailwindCSS)
    }
    if(this.javascript){
      filterTags.push(Tag.JAVASCRIPT)
    }
    if(this.react){
      filterTags.push(Tag.REACT)
    }
    if(this.tailwind || this.ngzorro || this.react || this.bootstrap || this.typescript || this.javascript || this.java || this.angular || this.rxjs){
      this.filtering = true;
    }
    else{
      this.filtering = false;
    }


    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters(){
    this.rxjs = false;
    this.angular = false;
    this.javascript = false;
    this.ngzorro= false;
    this.typescript = false;
    this.java = false;
    this.bootstrap = false;
    this.tailwind = false;
    this.react = false;
    this.filtering = false;
    
    this.projects = this.projectService.GetProjects();
  }
}
