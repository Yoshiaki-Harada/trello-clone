import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Memo, MemoId } from 'src/app/lib/domain/memo';
import { MemoContent } from 'src/app/lib/domain/memo-content';
import { Text } from 'src/app/lib/domain/text';
import { Title } from 'src/app/lib/domain/title';
import { MemoUsecase } from 'src/app/lib/usecase/memo-usecase';
import { MemoItems, MemoState } from 'src/app/lib/views/state/memo-state';

@Component({
  selector: 'app-board-template',
  templateUrl: './board-template.component.html',
  styleUrls: ['./board-template.component.scss'],
})
export class BoardTemplateComponent implements OnInit {
  @Input() bgImageUrl = '';
  newMemo: { title: string; text: string } | null = null;
  constructor(private memoUsecase: MemoUsecase, private state: MemoState) {}
  ngOnInit(): void {
    this.memoUsecase.display();
  }

  addCard(event: MouseEvent) {
    this.newMemo = { title: '', text: '' };
    this.state.memos.unshift({ title: '', text: '', id: '' });
  }

  get memos(): { title: string; text: string; id: string }[] {
    return this.state.memos;
  }

  onSave(event: { index: number; title: string; text: string }) {
    if (event.title === '' && event.text === '') {
      return;
    }
    if (this.memos[event.index].id === '') {
      this.memoUsecase.add(
        new MemoContent(new Title(event.title), new Text(event.text))
      );
      return;
    }
    this.memoUsecase.update(
      new Memo(
        new MemoId(this.memos[event.index].id!!),
        new MemoContent(new Title(event.title), new Text(event.text))
      )
    );
  }

  getUrl() {
    return `url(${this.bgImageUrl})`;
  }
}
