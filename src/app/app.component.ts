import { Component } from '@angular/core';
 import { HttpClient } from '@angular/common/http';

 interface Rocket {
  last_update: string;
  status: string;
  serial: string;
  type:string;
  water_landings: string;
  space: "data:image/jpeg;base64,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";
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'space-5b';
  data : Rocket[]= [];


  constructor(private http: HttpClient)
  {}
  ngOnInit() {
    this.http.get<Rocket[]>("https://api.spacexdata.com/v4/capsules").subscribe(data => {
      this.data = data;
    });
  }

}
