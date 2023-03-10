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
  public data$: Observable<data[]> = this.store.select(dataSelector)

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

}