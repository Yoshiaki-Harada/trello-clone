import { Injectable } from '@angular/core';
import { Memos } from '../domain/memos';
import { MemoState } from '../views/state/memo-state';

@Injectable()
export class MemoPresenter {
  constructor(private state: MemoState) {}

  store(memos: Memos) {
    this.state.memos = memos.list.map((e) => {
      return { id: e.id.value, title: e.title.value, text: e.text.value };
    });
  }
}
