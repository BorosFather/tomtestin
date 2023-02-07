import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PopupComponent } from './popup/popup.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: "test", component:TestComponent },
  {path: "about", component:AboutComponent },
  {path: "popup", component:PopupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
