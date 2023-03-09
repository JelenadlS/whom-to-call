import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function onlyNumbersValidator(regNumber: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const controlledNumber = regNumber.test(control.value);
      return controlledNumber ? null : {validNumber: {value: control.value}};
    };
  }