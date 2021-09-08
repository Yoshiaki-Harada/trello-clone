import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardPageComponent } from './components/01_pages/board-page/board-page.component';
import { BoardTemplateComponent } from './components/02_templates/board-template/board-template.component';
import { HeaderComponent } from './components/03_organisms/header/header.component';
import { CardListComponent } from './components/03_organisms/list/card-list.component';
import { ListHeaderComponent } from './components/05_atoms/list-header/list-header.component';
import { EditableCardComponent } from './components/04_molecules/card/editable-card.component';
import { AddCardButtonComponent } from './components/05_atoms/add-card-button/add-card-button.component';
import { CardTextEditorComponent } from './components/05_atoms/card-text-editor/card-text-editor.component';
import { ButtonComponent } from './components/05_atoms/flat-button/flat-button.component';
import { FormsModule } from '@angular/forms';
import { LibModule } from './lib/lib.module';
import { CornerRoundedButton } from './components/05_atoms/corner-rounded-button/corner-rounded-button.component';
@NgModule({
  declarations: [
    AppComponent,
    BoardPageComponent,
    BoardTemplateComponent,
    HeaderComponent,
    CardListComponent,
    ListHeaderComponent,
    EditableCardComponent,
    AddCardButtonComponent,
    CardTextEditorComponent,
    ButtonComponent,
    CornerRoundedButton,
  ],
  imports: [BrowserModule, FormsModule, LibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
