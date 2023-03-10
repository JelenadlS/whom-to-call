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
  @Input() data: any

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  public delete(id:string) {
    this.store.dispatch(deleteDataAction({id}))
  }
}
