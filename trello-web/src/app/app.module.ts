import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardPageComponent } from './components/01_pages/board-page/board-page.component';
import { BoardTemplateComponent } from './components/02_templates/board-template/board-template.component';
import { HeaderComponent } from './components/03_organisms/header/header.component';
import { ListComponent } from './components/03_organisms/list/list.component';
import { ListHeaderComponent } from './components/04_molecules/list-header/list-header.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardPageComponent,
    BoardTemplateComponent,
    HeaderComponent,
    ListComponent,
    ListHeaderComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
