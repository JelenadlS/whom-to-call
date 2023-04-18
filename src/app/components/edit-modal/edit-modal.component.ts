import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/services/person.interface';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.less']
})
export class EditModalComponent implements OnInit {
  @Output() updateEditModalState = new EventEmitter<boolean>();
  @Input() personToCall: Person = {} as Person;
  public formLayoutByStatus = 'edit'

  constructor() { }

  ngOnInit(): void {
  }

  public onClose(){
    this.updateEditModalState.emit(false)
  }

}
