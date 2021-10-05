import { Memo, MemoId } from '../domain/memo';
import { MemoContent } from '../domain/memo-content';
import { Memos } from '../domain/memos';

export abstract class MemoPort {
  constructor() {}
  abstract find(): Memos;
  abstract add(task: MemoContent): void;
  abstract update(memo: Memo): void;
  abstract delete(id: MemoId): void;
}
