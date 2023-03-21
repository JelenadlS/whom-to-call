import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { data } from 'src/app/services/data.interface';
import { dataSelector } from 'src/app/store/selectors/input-data.selector';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {
  public data$: Observable<data[]> = this.store.select(dataSelector);
  public randomPerson: any;
  public editPossibility: boolean = false;
  public todayOrLater:data[] = [];

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {

    this.data$.subscribe((data: data[]) =>{
      
      data.filter((data:data) => {
        const tomorrow = new Date(this.getDate(new Date()))
        const nextCallDate = new Date(this.addDays(new Date(this.convertDate(data.timeStamp)), data.frequency))

        if(nextCallDate > tomorrow ){
          this.todayOrLater.push(data);
        }
      })

      this.getRandomPerson(this.todayOrLater)
    })
  }

  public getDate(date: Date): string{
    const today = date;
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate() + 1;
    let newmm = ''
    let newdd = ''
    
    if (dd < 10) {
      newdd = '0' + dd
    } else {
      newdd = dd.toString()
    };
    if (mm < 10) {
      newmm = '0' + mm
    } else {
      newmm = mm.toString()
    }
    
    const formattedToday = yyyy + '-' + newmm + '-' + newdd;

    return formattedToday
  }

  public convertDate(date: string): string{
    const splitDate = date.split('.');

    const yyyy = splitDate[2];
    let mm = Number(splitDate[1]);
    let dd = Number(splitDate[0]);
    let newmm = ''
    let newdd = ''
    
    if (dd < 10) {
      newdd = '0' + dd
    } else {
      newdd = dd.toString()
    };
    if (mm < 10) {
      newmm = '0' + mm
    } else {
      newmm = mm.toString()
    }

    const formattedToday = yyyy + '-' + newmm + '-' + newdd;

    return formattedToday
  }

  public addDays(date: Date, days: string) {
    date.setDate(date.getDate() + Number(days))
    return date
  }

  public getRandomPerson(todayOrLater:data[]) {
    const randomIndex = Math.floor(Math.random() * todayOrLater.length);
    
    this.randomPerson= todayOrLater[randomIndex];
  }

}