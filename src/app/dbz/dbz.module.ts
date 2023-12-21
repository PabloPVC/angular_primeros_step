import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageCompoments } from './pages/main-page.component';
import { ListDbzComponent } from './components/list/list.component';
import { AddCaracterComponent } from './components/add-caracter/add-caracter.component';

@NgModule({
  declarations: [
    MainPageCompoments,
    ListDbzComponent,
    AddCaracterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [MainPageCompoments]
})
export class DbzModule { }
