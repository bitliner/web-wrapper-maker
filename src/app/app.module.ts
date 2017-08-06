import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DebuggerComponent } from './components/debugger/debugger.component';
import { ChoosePageComponent } from './components/choose-page/choose-page.component';
import { pageDebugger } from './reducers/debugger';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    DebuggerComponent,
    ChoosePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      pageDebugger,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
