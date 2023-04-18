import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/services/person.interface';

@Component({
  selector: 'app-called-modal',
  templateUrl: './called-modal.component.html',
  styleUrls: ['./called-modal.component.less']
})
export class CalledModalComponent implements OnInit {
  @Output() updateCalledModalState = new EventEmitter<boolean>();
  @Input() personToCall: Person = {} as Person;
  public formLayoutByStatus = 'called'

  constructor() { }

  ngOnInit(): void {
  }

  public onClose(status: boolean){
    this.updateCalledModalState.emit(status)
  }
}
