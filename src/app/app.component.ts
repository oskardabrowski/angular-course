import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <p [appHighlight]="'red'">Test</p>
  `
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

  }
}
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//   <label for="example">{{name}}</label>
//   <input [(ngModel)]="name" id="example" />
//   `
// })
// export class AppComponent implements OnInit {

//   isSpecial = true;
//   currentClasses = {};
//   currentStyle = {};
//   name = '';

//   ngOnInit() {
//     this.setCurrentClasses();
//     this.setCurrentStyle();
//   }

//   setCurrentClasses() {
//     this.currentClasses = {
//       savable: true,
//       modified: false,
//       special: true
//     }
//   }

//   setCurrentStyle() {
//     this.currentStyle = {
//       'font-style': 'italic',
//       'font-weight': 'bold'
//     }
//   }
// }

  // template: `<div [ngClass]="isSpecial ? 'special' : ''">Example</div>`

// @Component({
//   selector: 'app-root',
//   template: `
//   <input #ref1 type="text" [(ngModel)]="firstExample" />
//   <span *ngIf="true">{{ref1.value}}</span>
//   `,
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   firstExample = '';
// }
// @Component({
//   selector: 'app-root',
//   template: `<input #phone placeholder="phone" />
//   <button (click)="callPhone(phone.value)">Call</button>`,
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   callPhone(phone: string) {
//     alert(phone)
//   }
// }
// export class AppComponent {
//   fontSizepx = 16;
// }
// export class AppComponent {
//   deleteItem(item: string) {
//     alert(item)
//   }
// }
// export class AppComponent {
//   itemImageUrl = '../assets/neil-soni-6wdRuK7bVTE-unsplash.jpg';
//   isUnchanged = true;
// }
// export class AppComponent {
//   itemImageUrl = '../assets/neil-soni-6wdRuK7bVTE-unsplash.jpg';
//   isUnchanged = true;
// }
// export class AppComponent {
//   todayDate = new Date();
// }


// export class AppComponent {
//   showText = false;

//   toggleText(event: any): void {
//     this.showText = !this.showText;
//     console.log(event);
//   }
// }



// export class AppComponent {
//   title = 'Hello world!';

//   getMin(a: number,b: number) {
//     if(a < b) {
//       return a;
//     }

//     return b;
//   }
// }

// ! Hooki
// import { Component, OnInit, OnDestroy } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit, OnDestroy {
//   intervalSub: NodeJS.Timer | undefined;

//   ngOnInit(): void {
//     this.intervalSub = setInterval(() => {
//       console.log('Hello from ngOnInit');
//     }, 1000)
//   }

//   ngOnDestroy(): void {
//     if(this.intervalSub) {
//       clearInterval(this.intervalSub)
//     }
//   }

//   title = 'angular-tutorial';
// }
