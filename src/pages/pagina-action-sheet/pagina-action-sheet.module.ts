import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginaActionSheetPage } from './pagina-action-sheet';

@NgModule({
  declarations: [
    PaginaActionSheetPage,
  ],
  imports: [
    IonicPageModule.forChild(PaginaActionSheetPage),
  ],
})
export class PaginaActionSheetPageModule {}
