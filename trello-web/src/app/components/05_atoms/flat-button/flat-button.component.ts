import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flat-button',
  templateUrl: './flat-button.component.html',
  styleUrls: ['./flat-button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Output() click = new EventEmitter<MouseEvent>();
  constructor() {}

  ngOnInit(): void {}
}
