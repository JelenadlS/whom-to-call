import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { data } from 'src/app/services/data.interface';
import { localStorageSelector } from 'src/app/store/selectors/local-storage.selector';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  public fullListOfPersonsToCall$: Observable<data[]> = this.store.select(localStorageSelector)

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }
}
