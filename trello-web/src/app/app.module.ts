import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageComponent } from './components/01_pages/page/page.component';
import { HeaderComponent } from './components/02_organisms/header/header.component';
import { CardListComponent } from './components/02_organisms/list/card-list.component';
import { ListHeaderComponent } from './components/04_atoms/list-header/list-header.component';
import { EditableCardComponent } from './components/03_molecules/card/editable-card.component';
import { AddCardButtonComponent } from './components/04_atoms/add-card-button/add-card-button.component';
import { ButtonComponent } from './components/04_atoms/flat-button/flat-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibModule } from './lib/lib.module';
import { CornerRoundedButton } from './components/04_atoms/corner-rounded-button/corner-rounded-button.component';
import { CardFooterComponent } from './components/03_molecules/card-footer/card-footer.component';
@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    CardListComponent,
    ListHeaderComponent,
    EditableCardComponent,
    AddCardButtonComponent,
    ButtonComponent,
    CornerRoundedButton,
    CardFooterComponent,
  ],
  imports: [BrowserModule, FormsModule, LibModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
