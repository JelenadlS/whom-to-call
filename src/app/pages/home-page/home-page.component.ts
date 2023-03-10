import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { onlyNumbersValidator } from 'src/app/rules/only-numbers.directive';
import { data } from 'src/app/services/data.interface';
import { addDataAction } from 'src/app/store/actions/input-data.action';
import { dataSelector } from 'src/app/store/selectors/input-data.selector';
import * as uuid from 'uuid'

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
    timeStamp: new FormControl(0),
    id: new FormControl(0),
  });
  public data$: Observable<data[]> = this.store.select(dataSelector)

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  get name() { return this.addPersonForm.get('name')}
  get frequency() { return this.addPersonForm.get('frequency')}

  public onSubmit(): void {
    this.addPersonForm.value.timeStamp = new Date().toDateString()
    this.addPersonForm.value.id = uuid.v4()
    this.store.dispatch(addDataAction(this.addPersonForm.value))
    this.addPersonForm.reset();
  }

}