import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // @Input() childMessage: string | undefined;
  // @Output() messageEvent = new EventEmitter<string>();
  // sendMessage() {
  //   this.messageEvent.emit('Hello from child');
  // }

  message = 'message from child!';

  constructor() { }

  ngOnInit(): void {
  }



}
