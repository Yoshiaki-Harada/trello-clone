import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'editable-tag',
  templateUrl: './editable-tag.component.html',
  styleUrls: ['./editable-tag.component.scss'],
})
export class EditableTagComponent implements OnInit {
  @Input() tag: string | null = null;
  @Output() saveTagEvent: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSave() {
    if (this.tag !== null) {
      this.saveTagEvent.emit(this.tag);
    }
  }
}
