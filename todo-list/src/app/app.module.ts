import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './compoenets/navbar/navbar.component';
import { TodoFormComponent } from './compoenets/todo-form/todo-form.component';
import { TodoListComponent } from './compoenets/todo-list/todo-list.component';
import { TodoUpdateComponent } from './compoenets/todo-update/todo-update.component';
import { ErrorComponent } from './compoenets/error/error.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoUpdateComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-center',
      easing: 'ease-in',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
