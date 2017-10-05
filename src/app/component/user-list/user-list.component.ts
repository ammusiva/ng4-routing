import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() data = [];
  @Output() selected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getSelected(name){
    this.selected.emit(name);
  }
}
