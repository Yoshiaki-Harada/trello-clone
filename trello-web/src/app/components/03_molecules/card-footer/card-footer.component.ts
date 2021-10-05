import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss'],
})
export class CardFooterComponent implements OnInit {
  constructor() {}
  @Output() deleteEvent: EventEmitter<void> = new EventEmitter();
  @Output() tagUpdateEvent: EventEmitter<{ index: number; tag: string }> =
    new EventEmitter();
  @Output() tagAddEvent: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {}

  onDelete() {
    this.deleteEvent.emit();
  }

  onTagUpdate(event: { index: number; tag: string }) {
    this.tagUpdateEvent.emit(event);
  }
  onTagAdd(tag: string) {
    this.tagAddEvent.emit(tag);
  }
}
