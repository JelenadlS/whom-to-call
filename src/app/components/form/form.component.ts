import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { onlyNumbersValidator } from 'src/app/rules/only-numbers.directive';
import { data } from 'src/app/services/data.interface';
import { editDataAction } from 'src/app/store/actions/edit.action';
import { addDataAction } from 'src/app/store/actions/input-data.action';
import { dataSelector } from 'src/app/store/selectors/input-data.selector';
import * as uuid from 'uuid'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {
  @Input() addOrEdit:string = '';
  @Input() data: data = {
    id: '',
    name: '',
    frequency: '',
    timeStamp: ''
  };

  public addPersonForm = new FormGroup({
    name: new FormControl(this.data.name, [
      Validators.required, 
      Validators.minLength(4)
    ]),
    frequency: new FormControl(this.data.frequency, [
      Validators.required, 
      onlyNumbersValidator(/(([1-9]{1})|([1-9]{1}[0-9]{1,}))/)
    ]),
    timeStamp: new FormControl(this.data.timeStamp),
    id: new FormControl(this.data.id),
  });

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    if (this.addOrEdit === 'edit') {
      this.store.select(dataSelector)
      .subscribe((data: data[]) => {
        data.find((data: data) => {
          if(data.id === this.data.id){
            this.addPersonForm.patchValue(data)
          }
        })
        
      })
  }
  }

  get name() { return this.addPersonForm.get('name')}
  get frequency() { return this.addPersonForm.get('frequency')}

  public onSubmit(): void {
    if(this.addOrEdit === 'add'){
      this.addPersonForm.value.timeStamp = new Date().toLocaleDateString()
      this.addPersonForm.value.id = uuid.v4()
      this.store.dispatch(addDataAction(this.addPersonForm.value))
      this.addPersonForm.reset();
    }
    if(this.addOrEdit === 'edit'){
      this.store.dispatch(editDataAction(this.addPersonForm.value))
    }
  }

}
