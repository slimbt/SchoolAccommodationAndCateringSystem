import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css']
})
export class ModalInfoComponent  {
  @Input() showModal = false;
  @Output() closeModal = new EventEmitter<void>();
}


