import { Component, OnInit } from '@angular/core';
import { DefaultService } from '../../default/default.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GLOBAL } from '../../../config';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css'],
  providers: [DefaultService]
})
export class PutComponent implements OnInit {

  public page_title;
  public thereis = false;
  public info = false;
  public data: any;
  public dataToSend: any;
  public global = GLOBAL.url;
  public id:number;

  constructor(
    private _router: Router,
    private _defaultService: DefaultService
  ) {
    this.page_title = 'Operaciones del Api rest';
  }

  ngOnInit() {
    this.putData();
  }

  putData() {

    this.data = null;

    this.dataToSend = {
      "name": "lenin aparicio",
      "job": "team leader"
    }

    this.id = 136;

    this._defaultService.putDatas(this.id, this.dataToSend).subscribe((res) => {
      this.info = true;
      this.data = res;
    }, (err) => {
      console.log(err);
    })

  }

}
