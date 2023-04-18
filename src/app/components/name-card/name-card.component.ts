import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Person } from 'src/app/services/person.interface';
import { deletePersonAction } from 'src/app/store/actions/delete-person.action';
import { fullListOfPeopleSelector } from 'src/app/store/selectors/full-list-of-people.selector';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.less']
})
export class NameCardComponent implements OnInit {
  public fullListOfPersonsToCall$: Observable<Person[]> = this.store.select(fullListOfPeopleSelector);
  @Input() personToCall: Person = {} as Person;
  @Input() editPossibility: boolean = true;
  @Input() showCalledCheckBox:boolean = false;
  public nextTimeToCall: number = 0;
  public activeEdit:boolean = false;
  public activeCalled:boolean = false;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.fullListOfPersonsToCall$.subscribe((fullListOfPersonsToCall: Person[]) => {
      fullListOfPersonsToCall.filter((personToCall:Person) => {
        if(personToCall.id === this.personToCall.id){
          this.nextTimeToCall = personToCall.daysSinceLastCall
        }
      })
    })
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
