import { Component } from '@angular/core';
import { MetaService } from './meta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'metaDataUI';
  response: string | any;
  constructor(private meteDataService: MetaService) {

  }

  public getData(){
    this.meteDataService.fetch('metadata').subscribe((response) => {
       this.response = JSON.stringify(response, null, 4);
       console.log(response);
    });
  }


  }


