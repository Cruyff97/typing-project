import { Component } from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText= lorem.sentence();
  enteredText='';
  onInput(value : string) {
    this.enteredText=value;
  } 
  Compare(randomText : string, enteredText: string ) {
    if(!enteredText) {
      return 'pending'
    }
    return randomText===enteredText ? 'correct' : 'incorrect';
  }
}
