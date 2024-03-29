import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './compoenets/error/error.component';
import { TodoFormComponent } from './compoenets/todo-form/todo-form.component';
import { TodoListComponent } from './compoenets/todo-list/todo-list.component';
import { TodoUpdateComponent } from './compoenets/todo-update/todo-update.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: TodoListComponent },
  { path: 'add', component: TodoFormComponent },
  { path: 'update/:id', component: TodoUpdateComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
