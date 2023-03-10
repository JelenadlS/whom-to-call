import { Component, Input, OnInit } from '@angular/core';
import { data } from 'src/app/services/data.interface';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.less']
})
export class NameCardComponent implements OnInit {
  @Input() data: any

  constructor() { }

  ngOnInit(): void {
  }

}
