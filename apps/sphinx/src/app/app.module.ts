import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SphinxAdminModule } from '@demo/sphinx/admin';
import { SphinxUserModule } from '@demo/sphinx/user';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, SphinxAdminModule, SphinxUserModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
