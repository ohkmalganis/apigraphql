import { Component, OnInit } from '@angular/core';
import { DefaultService } from '../default/default.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GLOBAL } from '../../config';

@Component({
  selector: 'app-apirest',
  templateUrl: './apirest.component.html',
  styleUrls: ['./apirest.component.css'],
  providers: [DefaultService]
})
export class ApirestComponent implements OnInit {

  public page_title;
  public thereis = false;
  public info = false;
  public data:any;
  public global = GLOBAL.url;

  constructor(
    private _router: Router,
    private _defaultService: DefaultService
  ) 
  {
    this.page_title = 'Operaciones del Api rest';
  }

  ngOnInit() {
    this.getData();
  }

  getData()
  {
    this._defaultService.getDatas().subscribe((res) => {
      console.log(res);
      if(res)
      {
        this.info = true;
        if (res.data.length > 0) {
          this.data = res.data;
        }
      }
      
    }, (err) => {
      this.thereis = false;
      console.log("Sin informacion");
    })
  }

}
