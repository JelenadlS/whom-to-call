import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Person } from 'src/app/services/person.interface';
import { deletePersonAction } from 'src/app/store/actions/delete-person.action';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.less']
})
export class NameCardComponent implements OnInit {
  @Input() personToCall: Person = {} as Person;
  @Input() editPossibility: boolean = true;
  @Input() showCalledCheckBox:boolean = false;
  @Input() nextTimeToCall: number = 0;
  public activeEdit:boolean = false;
  public activeCalled:boolean = false;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  public onDelete(id:string) {
    this.store.dispatch(deletePersonAction({id}))
  }

  public onEdit(state: boolean) {
    this.activeEdit = state
  }

  public onCalled(state: boolean) {
    this.activeCalled = state
  }
}
