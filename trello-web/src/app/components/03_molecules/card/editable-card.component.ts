import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'editable-card',
  templateUrl: './editable-card.component.html',
  styleUrls: ['./editable-card.component.scss'],
})
export class EditableCardComponent implements OnInit {
  deleted = false;

  @Input() memo: { title: string; text: string; isNew: boolean } = {
    title: '',
    text: '',
    isNew: true,
  };
  @Output() focusoutOfCard: EventEmitter<{
    title: string;
    text: string;
    isNew: boolean;
  }> = new EventEmitter();
  @Output() deleteEvent: EventEmitter<void> = new EventEmitter();
  @Output() tagUpdateEvent: EventEmitter<{ index: number; tag: string }> =
    new EventEmitter();
  @Output() tagAddEvent: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onFocusout() {
    if (this.deleted) {
      return;
    }
    this.deleted = false;
    this.focusoutOfCard.emit(this.memo);
  }

  onDelete() {
    this.deleteEvent.emit();
    this.deleted = true;
  }

  onAddTag(tag: string) {
    this.tagAddEvent.emit(tag);
  }

  onTagUpdate(event: { index: number; tag: string }) {
    this.tagUpdateEvent.emit(event);
  }
}
