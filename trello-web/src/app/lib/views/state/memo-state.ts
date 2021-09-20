import { Injectable } from '@angular/core';

@Injectable()
export class MemoState {
  private _memos: MemoItems;
  constructor() {
    this._memos = [];
  }

  public get memos(): MemoItems {
    return this._memos;
  }
  public set memos(value: MemoItems) {
    this._memos = value;
  }
}

export type MemoItems = MemoItem[];

export type MemoItem = {
  id: string;
  title: string;
  text: string;
  isNew: boolean;
};
