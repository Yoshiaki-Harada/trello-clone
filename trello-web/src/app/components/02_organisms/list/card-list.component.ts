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
    title: string;
    text: string;
    isNew: boolean;
    index: number;
  }> = new EventEmitter();
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
    this.updateEvent.emit({ ...event, index });
  }
}
