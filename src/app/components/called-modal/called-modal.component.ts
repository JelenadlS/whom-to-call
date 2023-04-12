import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { data } from 'src/app/services/data.interface';

@Component({
  selector: 'app-called-modal',
  templateUrl: './called-modal.component.html',
  styleUrls: ['./called-modal.component.less']
})
export class CalledModalComponent implements OnInit {
  @Output() updateCalledModalState = new EventEmitter<boolean>();
  @Input() personToCall: data = {} as data;
  public formLayoutByStatus = 'called'

  constructor() { }

  ngOnInit(): void {
  }

  public close(status: boolean){
    this.updateCalledModalState.emit(status)
  }
}
