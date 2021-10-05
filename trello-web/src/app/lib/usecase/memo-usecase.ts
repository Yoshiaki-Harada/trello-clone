import { Injectable } from '@angular/core';
import { Memo, MemoId } from '../domain/memo';
import { MemoContent } from '../domain/memo-content';
import { Text } from '../domain/text';
import { Title } from '../domain/title';
import { MemoPort } from '../gateway/memo-port';
import { MemoPresenter } from '../presenter/memo-presenter';

@Injectable()
export class MemoUsecase {
  constructor(
    private memoPort: MemoPort,
    private memoPresenter: MemoPresenter
  ) {}

  addEntry() {
    this.memoPresenter.storeEntry(new MemoContent(new Title(''), new Text('')));
  }

  add(memo: MemoContent) {
    if (memo.isEntered()) {
      this.memoPort.add(memo);
    }
    this.display();
  }

  update(memo: Memo) {
    this.memoPort.update(memo);
    this.display();
  }

  display() {
    const memos = this.memoPort.find();
    this.memoPresenter.store(memos);
  }

  delete(id: MemoId) {
    this.memoPort.delete(id);
    this.display();
  }
}
