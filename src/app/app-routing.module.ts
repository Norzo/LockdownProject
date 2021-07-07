import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HousematelistComponent } from './housematelist/housematelist.component';

const routes: Routes = [
  { path: 'housematelist', component: HousematelistComponent },
  { path: 'home', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
