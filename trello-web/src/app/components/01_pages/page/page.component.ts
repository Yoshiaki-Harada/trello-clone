import { Component, Input, OnInit } from '@angular/core';
import { Memo, MemoId } from 'src/app/lib/domain/memo';
import { MemoContent } from 'src/app/lib/domain/memo-content';
import { Text } from 'src/app/lib/domain/text';
import { Title } from 'src/app/lib/domain/title';
import { MemoUsecase } from 'src/app/lib/usecase/memo-usecase';
import { MemoItem, MemoState } from 'src/app/lib/views/state/memo-state';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  bgImageUrl = '/assets/images/mountain.jpeg';
  constructor(private memoUsecase: MemoUsecase, private state: MemoState) {}
  ngOnInit(): void {
    this.memoUsecase.display();
  }

  addCard(event: MouseEvent) {
    this.memoUsecase.addEntry();
  }

  get memos(): MemoItem[] {
    return this.state.memos;
  }

  onSave(event: { title: string; text: string }) {
    this.memoUsecase.add(
      new MemoContent(new Title(event.title), new Text(event.text))
    );
  }

  onUpdate(event: { id: string; title: string; text: string }) {
    this.memoUsecase.update(
      new Memo(
        new MemoId(event.id),
        new MemoContent(new Title(event.title), new Text(event.text))
      )
    );
  }

  onDelete(id: string) {
    this.memoUsecase.delete(new MemoId(id));
  }

  getUrl() {
    return `url(${this.bgImageUrl})`;
  }

  onTagAdd(tag: string) {
    console.log(tag);
  }
  onTagUpdate(event: { memoId: string; tag: string }) {
    console.log(event);
  }
}
