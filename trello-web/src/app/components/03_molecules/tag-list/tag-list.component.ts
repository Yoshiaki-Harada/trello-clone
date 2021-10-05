import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
})
export class TagListComponent implements OnInit {
  tags: string[] = ['test'];

  @Output() updateEvent: EventEmitter<{ index: number; tag: string }> =
    new EventEmitter();
  @Output() addEvent: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onUpdate(index: number, tag: string) {
    this.updateEvent.emit({ index, tag });
  }

  onAdd(tag: string) {
    this.addEvent.emit(tag);
  }
}
