import { Component, OnInit } from '@angular/core';
import { DefaultService } from './default.service';
import { GLOBAL } from '../../config';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
