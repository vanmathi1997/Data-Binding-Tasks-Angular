import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
  public message: string="Initial message from sibling";
  recieveMessage(value)
{
  this.message=value;
}

  constructor() { }

  ngOnInit() {
  }

}
