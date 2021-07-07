import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HousematelistComponent } from "./housematelist/housematelist.component";
import { TabsComponent } from "./tabs/tabs.component";
import { HttpClientModule } from "@angular/common/http";
import { RoleslistComponent } from './roleslist/roleslist.component';
import { ChattabComponent } from './chattab/chattab.component';
import { HometabComponent } from './hometab/hometab.component';

@NgModule({
  declarations: [AppComponent, HousematelistComponent, TabsComponent, RoleslistComponent, ChattabComponent, HometabComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
