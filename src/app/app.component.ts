import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-two-way-binding';
  fontSizePx:number|string = 16;

  handleSizeChange(size:number|string){
    this.fontSizePx=size;
  }
}
