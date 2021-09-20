import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'editable-card',
  templateUrl: './editable-card.component.html',
  styleUrls: ['./editable-card.component.scss'],
})
export class EditableCardComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}

  onFocusout() {
    this.focusoutOfCard.emit(this.memo);
  }
}
