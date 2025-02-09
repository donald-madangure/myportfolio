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
  python: boolean = false;
  csharp: boolean = false;
  java: boolean = false;
  nodejs: boolean = false;
  aspnet: boolean = false;
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
    if(this.csharp){
      filterTags.push(Tag.CSHARP)
    }
    if(this.nodejs){
      filterTags.push(Tag.NGZORRO)
    }
    if(this.aspnet){
      filterTags.push(Tag.ASPNET)
    }
    if(this.python){
      filterTags.push(Tag.PYTHON)
    }
    if(this.javascript){
      filterTags.push(Tag.JAVASCRIPT)
    }
    if(this.react){
      filterTags.push(Tag.REACT)
    }
    if(this.python || this.csharp || this.react || this.aspnet || this.nodejs || this.javascript || this.java || this.angular || this.rxjs){
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
    this.python = false;
    this.csharp = false;
    this.java = false;
    this.nodejs = false;
    this.aspnet = false;
    this.react = false;
    this.filtering = false;
    
    this.projects = this.projectService.GetProjects();
  }
}
