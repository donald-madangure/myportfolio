import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.css']
})
export class ProjectsCardComponent {
  @Input() project = {} as Project;
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService){

  }

  OpenProjectModal(){

    const modalOptions: ModalOptions = {
      class: "modal-lg",
      initialState: {
        project: this.project
      }
    }
    this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions);
  }
}
