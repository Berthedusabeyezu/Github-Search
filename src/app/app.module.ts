import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchComponent } from './search/search.component';
import {HttpClientModule} from '@angular/common/http';
// import { StrikethroughDirective } from './strikethrough.directive';
@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    SearchComponent,
    // StrikethroughDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // StrikethroughDirective  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
