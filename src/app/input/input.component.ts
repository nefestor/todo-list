import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `

      <input class="todoInput" #inputElem
           [value]="title"
           placeholder="Adicione alguma tarefa"
           (keyup.enter)="changeTitle($event.target.value)"
           (blur)="cancelEdit($event.target)"
           (keyup.esc)="$event.target.blur()">

      <button class="btn btn-verde" (click)="changeTitle(inputElem.value)">
        +
     </button>

  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  @Input() title: string = '';
  @Output() submit: EventEmitter<string> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }

  cancelEdit(inputElem) {
    inputElem.value = this.title || inputElem.value;
    this.cancel.emit();
  }

}
