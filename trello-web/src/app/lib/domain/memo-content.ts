import { Text } from './text';
import { Title } from './title';

export class MemoContent {
  constructor(readonly title: Title, readonly text: Text) {}

  isEntered(): boolean {
    return !(this.title.value === '' && this.text.value === '');
  }
}
