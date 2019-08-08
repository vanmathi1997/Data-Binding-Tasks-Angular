import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  @Output()
  public messagePassEvent=new EventEmitter<string>();

  constructor() { }
  sendMessage(event)
  {
    this.messagePassEvent.emit(event);
  }
 

  ngOnInit() {
  }

}
