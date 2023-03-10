import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { onlyNumbersValidator } from 'src/app/rules/only-numbers.directive';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {
  public addPersonForm = new FormGroup({
    name: new FormControl('', [
      Validators.required, 
      Validators.minLength(4)
    ]),
    frequency: new FormControl('', [
      Validators.required, 
      onlyNumbersValidator(/(([1-9]{1})|([1-9]{1}[0-9]{1,}))/)
    ]),
    timeStamp: new FormControl(0)
  });
console = console
  constructor() { }

  ngOnInit(): void {
  }

  get name() { return this.addPersonForm.get('name')}
  get frequency() { return this.addPersonForm.get('frequency')}

  public onSubmit(): void {
    this.addPersonForm.value.timeStamp = new Date().toDateString()
    console.log(this.addPersonForm.value);
    this.addPersonForm.reset();
  }

}
