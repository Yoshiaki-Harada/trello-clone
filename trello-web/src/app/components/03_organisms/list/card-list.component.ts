import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  @Input() memos: { title: string; text: string }[] = [];
  @Output() saveEvent: EventEmitter<{
    title: string;
    text: string;
    index: number;
  }> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onSave(index: number, event: { title: string; text: string }) {
    this.saveEvent.emit({ ...event, index });
  }
}
