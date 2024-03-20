import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/services/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  task: Task = {
    title: '',
    description: '',
    status: '',
    id: '',
  };
  constructor(private taskServices: TaskService, private router: Router) {}

  ngOnInit: () => void = () => {};

  onSubmit(): void {
    this.taskServices.addTask(this.task).subscribe(() => {
      console.log('Success');
      this.task = { title: '', description: '', id: '', status: '' };
      this.router.navigate(['/home']);
    });
  }
}
