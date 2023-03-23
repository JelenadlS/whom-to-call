import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-called-modal',
  templateUrl: './called-modal.component.html',
  styleUrls: ['./called-modal.component.less']
})
export class CalledModalComponent implements OnInit {
  @Output() newCalledState = new EventEmitter<boolean>();
  @Input() data: any
  public addOrEdit = 'called'

  constructor() { }

  ngOnInit(): void {
  }

  public close(status: boolean){
    this.newCalledState.emit(status)
  }
}
