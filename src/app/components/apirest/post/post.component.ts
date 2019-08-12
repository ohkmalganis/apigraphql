import { Component, OnInit } from '@angular/core';
import { DefaultService } from '../../default/default.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GLOBAL } from '../../../config';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [DefaultService]
})
export class PostComponent implements OnInit {

  public page_title;
  public thereis = false;
  public info = false;
  public data: any;
  public dataToSend: any;
  public global = GLOBAL.url;

  constructor(
    private _router: Router,
    private _defaultService: DefaultService
  ) { 
    this.page_title = 'Operaciones del Api rest';
  }

  ngOnInit() {
    this.postData();
  }

  postData()
  {

    this.data = null;

    this.dataToSend = {
      "name": "jose aparicio",
      "job": "team leader"
    }

    this._defaultService.postDatas(this.dataToSend).subscribe((res) => {
      this.info = true;
      this.data = res;
    }, (err) => {
      console.log(err);
    })

  }

}
