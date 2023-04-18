import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/services/person.interface';

@Component({
  selector: 'app-random-person',
  templateUrl: './random-person.component.html',
  styleUrls: ['./random-person.component.less']
})
export class RandomPersonComponent implements OnInit {
  public randomPerson: Person = {} as Person;
  public editPossibility: boolean = false;
  public showCalledCheckBox: boolean = true;
  @Input() namesToBeCalledTodayOrLater: Person[] = [];
  @Input() nextTimeToCall: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.getRandomPerson(this.namesToBeCalledTodayOrLater)
  }

  public getRandomPerson(todayOrLater: Person[]) {
    const randomIndex = Math.floor(Math.random() * todayOrLater.length);
    
    this.randomPerson= todayOrLater[randomIndex];
  }
}
