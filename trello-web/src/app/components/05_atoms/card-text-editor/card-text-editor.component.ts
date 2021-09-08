import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-text-editor',
  templateUrl: './card-text-editor.component.html',
  styleUrls: ['./card-text-editor.component.scss'],
})
export class CardTextEditorComponent implements OnInit {
  text = '';
  @Output() textChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onChange() {
    this.textChange.emit(this.text);
  }
}
