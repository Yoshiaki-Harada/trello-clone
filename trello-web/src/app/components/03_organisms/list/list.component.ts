import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  isAddCardMode = true;

  constructor() {}

  ngOnInit(): void {}
  openEditor() {
    console.log('catch event');
    this.isAddCardMode = true;
  }
}
