import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { data } from 'src/app/services/data.interface';
import { localStorageSelector } from 'src/app/store/selectors/local-storage.selector';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.less']
})
export class ListPageComponent implements OnInit {
  public fullListOfPersonsToCall$: Observable<data[]> = this.store.select(localStorageSelector)

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }
}
