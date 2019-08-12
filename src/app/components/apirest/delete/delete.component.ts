import { Component, OnInit } from '@angular/core';
import { DefaultService } from '../../default/default.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GLOBAL } from '../../../config';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  providers: [DefaultService]
})
export class DeleteComponent implements OnInit {

  public page_title;
  public thereis = false;
  public info = false;
  public data: any;
  public dataToSend: any;
  public global = GLOBAL.url;
  public id: number;

  constructor(
    private _router: Router,
    private _defaultService: DefaultService
  ) {
    this.page_title = 'Operaciones del Api rest';
  }

  ngOnInit() {
    this.deleteData();
  }

  deleteData() {

    this.data = null;

    this.id = 136;

    this._defaultService.deleteDatas(this.id).subscribe((res) => {
      
      this.info = true;
      this.data = 204;
    }, (err) => {
      console.log(err);
    })

  }

}
