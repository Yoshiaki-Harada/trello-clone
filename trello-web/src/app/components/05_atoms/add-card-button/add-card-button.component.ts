import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-card-button',
  templateUrl: './add-card-button.component.html',
  styleUrls: ['./add-card-button.component.scss'],
})
export class AddCardButtonComponent implements OnInit {
  @Output() openEditorEvent = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  openEditor() {
    this.openEditorEvent.emit();
  }
}
