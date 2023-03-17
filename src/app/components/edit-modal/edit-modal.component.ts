import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.less']
})
export class EditModalComponent implements OnInit {
  @Output() newEditState = new EventEmitter<boolean>();
  @Input() data: any
  public addOrEdit = 'edit'

  constructor() { }

  ngOnInit(): void {
  }

  public close(){
    this.newEditState.emit(false)
  }

}
