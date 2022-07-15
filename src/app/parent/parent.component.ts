import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // @ViewChild(ChildComponent) child: any;

  // ngAfterViewInit() {
  //   alert(this.child.message);
  // }

  // receiveMessage(msg:string) {
  //   alert(msg);
  // }

}
