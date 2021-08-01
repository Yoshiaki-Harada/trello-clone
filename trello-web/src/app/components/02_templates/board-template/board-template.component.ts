import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-template',
  templateUrl: './board-template.component.html',
  styleUrls: ['./board-template.component.scss'],
})
export class BoardTemplateComponent implements OnInit {
  @Input() bgImageUrl = '';
  constructor() {}

  ngOnInit(): void {}

  getUrl() {
    return `url(${this.bgImageUrl})`;
  }
}
