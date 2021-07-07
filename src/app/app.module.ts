import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HousematelistComponent } from "./housematelist/housematelist.component";
import { TabsComponent } from "./tabs/tabs.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, HousematelistComponent, TabsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
