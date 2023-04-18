import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { convertStringDateToIsoFormatRule } from 'src/app/rules/convert-string-date-to-iso-format.rule';
import { data } from 'src/app/services/data.interface';
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
  public fullListOfPersonsToCall$: Observable<data[]> = this.store.select(fullListOfPeopleSelector);
  public randomPerson: data = {} as data;
  public editPossibility: boolean = false;
  public showCalledCheckBox: boolean = true;
  public namesToBeCalledTodayOrLater: data[] = [];
  public showRandomPersonToCall: boolean = false;
  public dueDate: number = 0;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {

    this.fullListOfPersonsToCall$.subscribe((fullListOfPersonsToCall: data[]) => {
      fullListOfPersonsToCall.filter((personToCall:data) => {
        const today = new Date()
        today.setDate(today.getDate() + 1)
        const tomorrow = today

        const nextCallDate = new Date(
          convertStringDateToIsoFormatRule(personToCall.dueDate)
          )

         if(nextCallDate < tomorrow ){
         this.namesToBeCalledTodayOrLater.push(personToCall);
          }
      })
    })
  }


  public onShowRandomPersonToCall() {
    this.showRandomPersonToCall = !this.showRandomPersonToCall
  }
}