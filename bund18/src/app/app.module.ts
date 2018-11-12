import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgxEchartsModule } from 'ngx-echarts';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { RecordService, RemoteControlService } from './_services';
import { Bund18Component } from './bund18/bund18.component';
import { Bund18recordComponent } from './bund18record/bund18record.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DisplayComponent } from './display/display.component';
import { ShareComponent } from './share/share.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    NgxEchartsModule,
  ],
  declarations: [
    AppComponent,
    Bund18Component,
    Bund18recordComponent,
    WelcomeComponent,
    DisplayComponent,
    ShareComponent,
  ],  
  providers: [
    RecordService,
    RemoteControlService,
    { provide: LOCALE_ID, useValue: 'zh-Hans'},
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
