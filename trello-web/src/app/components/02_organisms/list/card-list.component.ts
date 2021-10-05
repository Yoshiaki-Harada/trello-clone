import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MemoItem } from 'src/app/lib/views/state/memo-state';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  @Input() memos: MemoItem[] = [];
  @Output() saveEvent: EventEmitter<{
    title: string;
    text: string;
    isNew: boolean;
  }> = new EventEmitter();
  @Output() updateEvent: EventEmitter<{
    id: string;
    title: string;
    text: string;
    isNew: boolean;
  }> = new EventEmitter();
  @Output() deleteEvenet: EventEmitter<string> = new EventEmitter();
  @Output() tagUpdateEvent: EventEmitter<{ memoId: string; tag: string }> =
    new EventEmitter();
  @Output() tagAddEvent: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSave(
    index: number,
    event: { title: string; text: string; isNew: boolean }
  ) {
    if (event.isNew) {
      this.saveEvent.emit(event);
      return;
    }
    this.updateEvent.emit({ ...event, id: this.memos[index].id });
  }

  onDelete(index: number, event: any) {
    this.deleteEvenet.emit(this.memos[index].id);
  }

  onTagUpdate(event: { index: number; tag: string }) {
    this.tagUpdateEvent.emit({
      memoId: this.memos[event.index].id,
      tag: event.tag,
    });
  }

  onTagAdd(tag: string) {
    this.tagAddEvent.emit(tag);
  }
}
