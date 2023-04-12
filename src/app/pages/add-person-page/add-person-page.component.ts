import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-person-page',
  templateUrl: './add-person-page.component.html',
  styleUrls: ['./add-person-page.component.less']
})
export class AddPersonPageComponent implements OnInit {
  public formLayoutByStatus = 'add'
  
  constructor( ) { }

  ngOnInit(): void {
  }

}
