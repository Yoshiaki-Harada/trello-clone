import { MemoContent } from './memo-content';

export class Memo {
  constructor(readonly id: MemoId, private content: MemoContent) {}

  get title() {
    return this.content.title;
  }

  get text() {
    return this.content.text;
  }
}

export class MemoId {
  constructor(readonly value: string) {}
}
