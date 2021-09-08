import { Injectable } from '@angular/core';
import { Memo } from '../domain/memo';
import { MemoContent } from '../domain/memo-content';
import { MemoPort } from '../gateway/memo-port';
import { MemoPresenter } from '../presenter/memo-presenter';

@Injectable()
export class MemoUsecase {
  constructor(
    private memoPort: MemoPort,
    private memoPresenter: MemoPresenter
  ) {}
  add(memo: MemoContent) {
    this.memoPort.add(memo);
    this.display();
  }

  update(memo: Memo) {
    this.memoPort.update(memo);
    this.display();
  }

  display() {
    const memos = this.memoPort.find();
    console.log(memos);
    this.memoPresenter.store(memos);
  }
}
