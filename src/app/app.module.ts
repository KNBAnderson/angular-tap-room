import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFormComponent } from './add-form/add-form.component';
import { SplashComponent } from './splash/splash.component';
import { EmployeeComponent } from './employee/employee.component';
import { PatronComponent } from './patron/patron.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    SplashComponent,
    EmployeeComponent,
    PatronComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }