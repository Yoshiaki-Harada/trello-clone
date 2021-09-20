import { Injectable } from '@angular/core';
import { MemoContent } from '../domain/memo-content';
import { Memos } from '../domain/memos';
import { MemoState } from '../views/state/memo-state';

@Injectable()
export class MemoPresenter {
  constructor(private state: MemoState) {}

  storeEntry(memo: MemoContent) {
    this.state.memos = [
      { id: '', title: memo.title.value, text: memo.text.value, isNew: true },
      ...this.state.memos,
    ];
  }

  store(memos: Memos) {
    this.state.memos = memos.list.map((e) => {
      return {
        id: e.id.value,
        title: e.title.value,
        text: e.text.value,
        isNew: false,
      };
    });
  }
}
