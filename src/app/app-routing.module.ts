import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HousematelistComponent } from './housematelist/housematelist.component';
import { HometabComponent } from './hometab/hometab.component';
import { RoleslistComponent } from './roleslist/roleslist.component';
import { ChattabComponent } from './chattab/chattab.component';

const routes: Routes = [
  { path: 'housematelist', component: HousematelistComponent },
  { path: 'home', component: HometabComponent },
  { path: 'roles', component: RoleslistComponent},
  { path: 'chat', component: ChattabComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
