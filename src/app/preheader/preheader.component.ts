import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-preheader',
  templateUrl: './preheader.component.html',
  styleUrls: ['./preheader.component.css']
})
export class PreheaderComponent {
 @Output() choosen=new EventEmitter<string>();
  
  choose(hey:string){
    this.choosen.emit()
  }
}
