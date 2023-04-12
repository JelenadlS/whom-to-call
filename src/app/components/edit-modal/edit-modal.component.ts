import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { data } from 'src/app/services/data.interface';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.less']
})
export class EditModalComponent implements OnInit {
  @Output() updateEditModalState = new EventEmitter<boolean>();
  @Input() personToCall: data = {} as data;
  public formLayoutByStatus = 'edit'

  constructor() { }

  ngOnInit(): void {
  }

  public onClose(){
    this.updateEditModalState.emit(false)
  }

}
