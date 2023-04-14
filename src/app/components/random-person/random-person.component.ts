import { Component, Input, OnInit } from '@angular/core';
import { data } from 'src/app/services/data.interface';

@Component({
  selector: 'app-random-person',
  templateUrl: './random-person.component.html',
  styleUrls: ['./random-person.component.less']
})
export class RandomPersonComponent implements OnInit {
  public randomPerson: data = {} as data;
  public editPossibility: boolean = false;
  public showCalledCheckBox: boolean = true;
  @Input() namesToBeCalledTodayOrLater: data[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getRandomPerson(this.namesToBeCalledTodayOrLater)
  }

  public getRandomPerson(todayOrLater:data[]) {
    const randomIndex = Math.floor(Math.random() * todayOrLater.length);
    
    this.randomPerson= todayOrLater[randomIndex];
  }
}
