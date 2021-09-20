import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss'],
})
export class CardFooterComponent implements OnInit {
  isOpen: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
