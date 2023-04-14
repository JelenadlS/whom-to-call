import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { data } from 'src/app/services/data.interface';
import { localStorageSelector } from 'src/app/store/selectors/local-storage.selector';

 // TODO Random nur einmal vorkommen lassen
 // TODO Liste nach next Call ordnen anstelle von Random // toggle einbauen was man will?
 // TODO Layout auf screen anpassen alles nach oben setzen und nach unten scrollen lassen
 // TODO volle liste nach Alphabet sortieren
 // TODO check ob modal nur in einer componente sein kann
 // TODO gehen noch mehr shared componenten?

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {
  public fullListOfPersonsToCall$: Observable<data[]> = this.store.select(localStorageSelector);
  public randomPerson: data = {} as data;
  public editPossibility: boolean = false;
  public showCalledCheckBox: boolean = true;
  public namesToBeCalledTodayOrLater: data[] = [];

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {

    this.fullListOfPersonsToCall$.subscribe((fullListOfPersonsToCall: data[]) =>{
      fullListOfPersonsToCall.filter((personToCall:data) => {
        const tomorrow = new Date(this.convertNewDateToStringDate(new Date()));
        const nextCallDate = new Date(this.addFrequencyDays(new Date(this.convertStringDateToOtherFormat(personToCall.timeStamp)), personToCall.frequency));
        if(nextCallDate < tomorrow ){
          this.namesToBeCalledTodayOrLater.push(personToCall);
        }
      })
    })
  }

  public convertNewDateToStringDate(date: Date): string{
    const today = date;
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate() + 1;
    let monthToString = ''
    let dayToString = ''
    
    if (day < 10) {
      dayToString = '0' + day
    } else {
      dayToString = day.toString()
    };
    if (month < 10) {
      monthToString = '0' + month
    } else {
      monthToString = month.toString()
    }
    
    const formattedToday = year + '-' + monthToString + '-' + dayToString;

    return formattedToday
  }

  public convertStringDateToOtherFormat(date: string): string{
    const splitDate = date.split('.');

    const year = splitDate[2];
    let month = Number(splitDate[1]);
    let day = Number(splitDate[0]);
    let monthToString = ''
    let dayToString = ''
    
    if (day < 10) {
      dayToString = '0' + day
    } else {
      dayToString = day.toString()
    };
    if (month < 10) {
      monthToString = '0' + month
    } else {
      monthToString = month.toString()
    }

    const formattedToday = year + '-' + monthToString + '-' + dayToString;

    return formattedToday
  }

  public addFrequencyDays(date: Date, frequency: string) {
    //TODO korrekte Berechnung einfügen, irgendwo ist ein kleiner Bug
    date.setDate(date.getDate() + Number(frequency))
    return date
  }
}