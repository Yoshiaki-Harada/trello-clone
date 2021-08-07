import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardPageComponent } from './components/01_pages/board-page/board-page.component';
import { BoardTemplateComponent } from './components/02_templates/board-template/board-template.component';
import { HeaderComponent } from './components/03_organisms/header/header.component';
import { ListComponent } from './components/03_organisms/list/list.component';
import { ListHeaderComponent } from './components/05_atoms/list-header/list-header.component';
import { CardComponent } from './components/04_molecules/card/card.component';
import { AddCardButtonComponent } from './components/05_atoms/add-card-button/add-card-button.component';
import { CardTextEditorComponent } from './components/04_molecules/card-text-editor/card-text-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardPageComponent,
    BoardTemplateComponent,
    HeaderComponent,
    ListComponent,
    ListHeaderComponent,
    CardComponent,
    AddCardButtonComponent,
    CardTextEditorComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
