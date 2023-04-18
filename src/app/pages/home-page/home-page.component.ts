import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { convertStringDateToIsoFormatRule } from 'src/app/rules/convert-string-date-to-iso-format.rule';
import { Person } from 'src/app/services/person.interface';
import { fullListOfPeopleSelector } from 'src/app/store/selectors/full-list-of-people.selector';

 // TODO Random nur einmal vorkommen lassen
 // TODO Layout auf screen anpassen alles nach oben setzen und nach unten scrollen lassen
 // TODO volle liste nach Alphabet sortieren
 // TODO check ob modal nur in einer componente sein kann
 // TODO gehen noch mehr shared componenten?


 // TODO Liste nach next Call ordnen anstelle von Random
 // text due since + nach Zeit sortieren
 

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {
  public fullListOfPersonsToCall$: Observable<Person[]> = this.store.select(fullListOfPeopleSelector);
  public randomPerson: Person = {} as Person;
  public editPossibility: boolean = false;
  public showCalledCheckBox: boolean = true;
  public namesToBeCalledTodayOrLater: Person[] = [];
  public showRandomPersonToCall: boolean = false;
  public nextTimeToCall: number = 0;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {

    this.fullListOfPersonsToCall$.subscribe((fullListOfPersonsToCall: Person[]) => {
      fullListOfPersonsToCall.filter((personToCall:Person) => {
        const today = new Date()
        today.setDate(today.getDate() + 1)
        const tomorrow = today

        const nextCallDate = new Date(
          convertStringDateToIsoFormatRule(personToCall.nextTimeToCall)
        )
        
 
        if(nextCallDate < tomorrow ){
        this.namesToBeCalledTodayOrLater.push(personToCall);
        const timeInMiliSec = today.getTime() - nextCallDate.getTime()
        this.nextTimeToCall = Math.ceil(timeInMiliSec/ (1000 * 3600 * 24));
        }
      })
    })
  }


  public onShowRandomPersonToCall() {
    this.showRandomPersonToCall = !this.showRandomPersonToCall
  }
}