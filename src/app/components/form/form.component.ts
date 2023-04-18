import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { onlyNumbersValidator } from 'src/app/rules/only-numbers.directive';
import { data } from 'src/app/services/data.interface';
import { editPersonAction } from 'src/app/store/actions/edit-person.action';
import { addPersonAction } from 'src/app/store/actions/add-person.action';
import { fullListOfPeopleSelector } from 'src/app/store/selectors/full-list-of-people.selector';
import * as uuid from 'uuid'
import { convertNewDateToStringDateRule } from 'src/app/rules/convert-new-date-to-string-date.rule';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {
  @Input() formLayoutByStatus:string = '';
  @Input() personToCall: data = {
    id: '',
    name: '',
    frequency: '',
    timeStamp: '',
    dueDate: '',
  };
  @Output() updateCalledModalState = new EventEmitter<boolean>();

  public personForm = new FormGroup({
    name: new FormControl(this.personToCall.name, [
      Validators.required, 
      Validators.minLength(4)
    ]),
    frequency: new FormControl(this.personToCall.frequency, [
      Validators.required, 
      onlyNumbersValidator(/(([1-9]{1})|([1-9]{1}[0-9]{1,}))/)
    ]),
    timeStamp: new FormControl(this.personToCall.timeStamp, [
      Validators.required, 
      onlyNumbersValidator(/^\d{2}[.]\d{2}[.]\d{4}$/)
    ]),
    id: new FormControl(this.personToCall.id),
  });

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    if (this.formLayoutByStatus === 'edit') {
      this.store.select(fullListOfPeopleSelector)
      .subscribe((data: data[]) => {
        data.find((data: data) => {
          if(data.id === this.personToCall.id){
            this.personForm.patchValue(data)
          }
        })
      })
    }
  }

  get name() { return this.personForm.get('name')};
  get frequency() { return this.personForm.get('frequency')};

  public onSubmit(): void {
    if(this.formLayoutByStatus === 'add'){
      this.personForm.value.timeStamp = convertNewDateToStringDateRule(new Date());
      this.personForm.value.id = uuid.v4();
      this.store.dispatch(addPersonAction(this.personForm.value));
      this.personForm.reset();
    }

    if(this.formLayoutByStatus === 'edit'){
      this.store.dispatch(editPersonAction(this.personForm.value));
    }

    if(this.formLayoutByStatus === 'called'){
      this.personForm.value.name = this.personToCall.name;
      this.personForm.value.id = this.personToCall.id;
      this.personForm.value.frequency = this.personToCall.frequency;
      this.personForm.value.timeStamp = convertNewDateToStringDateRule(new Date());
      this.store.dispatch(editPersonAction(this.personForm.value));
      this.updateCalledModalState.emit(false);
      window.location.reload();
    }
  }

}
