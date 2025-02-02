import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  constructor(private titleService:Title, private rendrer:Renderer2){
    this.titleService.setTitle('Donald Madangure - Resume')
  }
  
  DownloadFile(){
    const link = this.rendrer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/Donald Madangure-Resume.pdf');
    link.setAttribute('download', 'donaldmadangure.pdf');
    link.click();
    link.remove();
  }
}
