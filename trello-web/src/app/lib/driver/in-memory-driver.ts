export type Memo = { title: string; text: string; id: string };
export class InMemoryDriver {
  addMemo(memo: Memo) {
    const memos = this.getMemo();
    localStorage.setItem('memos', JSON.stringify([memo, ...memos]));
  }

  updateMemo(memo: Memo) {
    const memos = this.getMemo();
    const target = memos.findIndex((e) => e.id === memo.id);
    memos.splice(target, 1, memo);
    localStorage.setItem('memos', JSON.stringify(memos));
  }

  deleteMemo(id: string) {
    const memos = this.getMemo();
    localStorage.setItem(
      'memos',
      JSON.stringify(memos.filter((e) => e.id !== id))
    );
  }

  getMemo(): Memo[] {
    return JSON.parse(localStorage.getItem('memos') ?? '[]') as Memo[];
  }
}
