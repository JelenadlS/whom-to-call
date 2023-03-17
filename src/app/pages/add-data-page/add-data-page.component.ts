import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-data-page',
  templateUrl: './add-data-page.component.html',
  styleUrls: ['./add-data-page.component.less']
})
export class AddDataPageComponent implements OnInit {
  public addOrEdit = 'add'
  
  constructor( ) { }

  ngOnInit(): void {
  }

}
