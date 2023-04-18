import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { data } from 'src/app/services/data.interface';
import { fullListOfPeopleSelector } from 'src/app/store/selectors/full-list-of-people.selector';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.less']
})
export class ListPageComponent implements OnInit {
  public fullListOfPersonsToCall$: Observable<data[]> = this.store.select(fullListOfPeopleSelector)

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }
}
