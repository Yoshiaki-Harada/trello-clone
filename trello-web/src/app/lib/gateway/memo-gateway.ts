import { Injectable } from '@angular/core';
import { Memo, MemoId } from '../domain/memo';
import { MemoContent } from '../domain/memo-content';
import { Memos } from '../domain/memos';
import { Text } from '../domain/text';
import { Title } from '../domain/title';
import { InMemoryDriver } from '../driver/in-memory-driver';
import { MemoPort } from './memo-port';

@Injectable()
export class MemoGateway extends MemoPort {
  find(): Memos {
    const lists = this.driver
      .getMemo()
      .map(
        (e) =>
          new Memo(
            new MemoId(e.id),
            new MemoContent(new Title(e.title), new Text(e.text))
          )
      );
    return new Memos(lists);
  }
  constructor(private driver: InMemoryDriver) {
    super();
  }
  add(memo: MemoContent): void {
    this.driver.saveMemo({
      title: memo.title.value,
      text: memo.text.value,
      id: Math.random().toString(32).substring(2),
    });
  }
  update(memo: Memo): void {
    this.driver.updateMemo({
      id: memo.id.value,
      title: memo.title.value,
      text: memo.text.value,
    });
  }
}
