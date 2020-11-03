import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-app';
  color:string='blue';
  ondir(  e:any){
    this.color=e.color
    console.log("这是指令中的数据-----"+JSON.stringify(e))
  }
}
