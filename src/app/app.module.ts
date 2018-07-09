import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BlurayService } from './shared/bluray/bluray.service';
import { HttpClientModule } from '@angular/common/http';
import { BlurayListComponent } from './bluray-list/bluray-list.component';
import { BlurayAddComponent } from './bluray-add/bluray-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BlurayListComponent,
    BlurayAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BlurayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
