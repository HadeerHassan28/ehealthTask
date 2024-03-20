import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './compoenets/navbar/navbar.component';
import { TodoFormComponent } from './compoenets/todo-form/todo-form.component';
import { TodoListComponent } from './compoenets/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoFormComponent,
    TodoListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
