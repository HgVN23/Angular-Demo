import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  template: `Username: {{ username }}`
})
export class UserComponent {
  username = 'Shuuya';
}

@Component({
  selector: 'app-if',
  standalone: true,
  imports: [],
  template: `
    @if (isCheck) {
      <div>True</div>
    } @else {
      <div>False</div>
    }
  `
})
export class IfComponent {
  isCheck = false;
}

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [],
  template: `
    @for(user of users; track user.id) {
      <li>{{ user.name }}</li>
    }
  `
})
export class ForComponent {
  users = [
    {id: 0, name: 'Shuuya'},
    {id: 1, name: 'Hyouka'},
    {id: 2, name: 'Kowashi'},
    {id: 3, name: 'Asahi'},
  ];
}

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [],
  template: `
    <div [contentEditable]="isEditable"></div>
  `
})
export class BindingComponent {
  isEditable = true;
}

@Component({
  selector: 'app-handling',
  standalone: true,
  imports: [],
  template: `
    <section (mouseover)="onMouseOver()">
      There's a secret message for you, hover to reveal:
      {{ message }}
    </section>
  `
})
export class HandlingComponent {
  message = '';

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }
}

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  template: `
    <div>The user's name is {{ name }}</div>
  `
})
export class InputComponent {
  @Input() name = '';
}

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [],
  template: `
    <button class="btn btn-primary" (click)="addItem()">Add Item</button>
  `
})
export class OutputComponent {
  @Output() addItemEvent = new EventEmitter<string>();

  addItem() {
    this.addItemEvent.emit('🍪');
  }
}

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [ForComponent],
  template: `
    @defer (on viewport) {
      <app-for />
    } @placeholder {
      <p>Future comments</p>
    } @loading (minimum 2s) {
      <p>Loading comments...</p>
    }
  `
})
export class DeferComponent {

}

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    UserComponent,
    IfComponent,
    ForComponent,
    BindingComponent,
    HandlingComponent,
    InputComponent,
    OutputComponent,
    DeferComponent
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}
