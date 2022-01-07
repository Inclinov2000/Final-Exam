import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

  public value1!:number;
public value2!:number;
public value3!:number;

add(){
  this.value3=this.value1+this.value2;
}
sub(){
  this.value3=this.value1-this.value2;
}
multiply(){
  this.value3=this.value1*this.value2;
}
divide(){
  this.value3=this.value1/this.value2;
}
}

