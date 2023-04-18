import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Person } from 'src/app/services/person.interface';
import { fullListOfPeopleSelector } from 'src/app/store/selectors/full-list-of-people.selector';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.less']
})
export class ListPageComponent implements OnInit {
  public fullListOfPersonsToCall$: Observable<Person[]> = this.store.select(fullListOfPeopleSelector);
  public sortedFullListOfPersonsToCall: Person[] = [] as Person[];

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.fullListOfPersonsToCall$.subscribe((fullListOfPersonsToCall: Person[]) => {
     const copyOfArrayToSort = [...fullListOfPersonsToCall]
     this.sortedFullListOfPersonsToCall = copyOfArrayToSort.sort((a, b) => (a.name < b.name) ? -1 : 1)
    })
  }


}
