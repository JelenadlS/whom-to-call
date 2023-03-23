import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { data } from 'src/app/services/data.interface';
import { deleteDataAction } from 'src/app/store/actions/delete.action';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.less']
})
export class NameCardComponent implements OnInit {
  @Input() data: any;
  @Input() editPossibility: boolean = true;
  @Input() showCalledChecBox:boolean = false;
  public activeEdit:boolean = false;
  public activeCalled:boolean = false;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  public delete(id:string) {
    this.store.dispatch(deleteDataAction({id}))
  }

  public edit(state: boolean) {
    this.activeEdit = state
  }

  public called(state: boolean) {
    this.activeCalled = state
  }
}
