import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoUsecase } from './usecase/memo-usecase';
import { MemoPort } from './gateway/memo-port';
import { MemoGateway } from './gateway/memo-gateway';
import { InMemoryDriver } from './driver/in-memory-driver';
import { MemoState } from './views/state/memo-state';
import { MemoPresenter } from './presenter/memo-presenter';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    MemoUsecase,
    { provide: MemoPort, useClass: MemoGateway },
    InMemoryDriver,
    MemoState,
    MemoPresenter,
  ],
})
export class LibModule {}
