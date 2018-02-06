import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <div class="todoItem">
    <input type="checkbox" (click)="completeItem()"/>

    <span [hidden]="editing"
          (click)="editItem()" class="todo-title" [ngClass]="{'todo-complete': isComplete}">{{ item.title }}</span>

    <todo-input [hidden]="!editing"
                [title]="item.title"
                (submit)="changeItemTitle($event)" (cancel)="cancelEdit($event)">
    </todo-input>

    <button class="btn btnRed" (click)="removeItem()">
      Remover
    </button>
    </div>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item;
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() changeTitle: EventEmitter<any> = new EventEmitter();

  // tslint:disable-next-line:no-inferrable-types
  private editing: boolean = false;
  // tslint:disable-next-line:no-inferrable-types
  isComplete: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  removeItem() {
    this.remove.emit(this.item);
  }

  editItem() {
    this.editing = true;
  }

  changeItemTitle(newTitle) {
    this.editing = false;
    this.changeTitle.emit({
      item: this.item,
      newTitle
    });
  }

  cancelEdit() {
    this.editing = false;
  }
  completeItem() {
    this.isComplete = !this.isComplete;
  }

}
