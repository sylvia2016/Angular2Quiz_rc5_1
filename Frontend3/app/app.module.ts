
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { HttpModule } from '@angular/http';
import { ContactModule } from './components/contact/contact.module';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        ContactModule
    ],

    declarations: [AppComponent],

    providers: [],

    bootstrap: [AppComponent]
})

export class AppModule { }