import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/services/task';
import { TaskService } from 'src/app/services/task.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  task: Task = {
    title: '',
    description: '',
    complete: true,
    id: '',
    status: '',
  };
  constructor(
    private taskServices: TaskService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit: () => void = () => {};

  onSubmit(): void {
    if (this.task.status.toLowerCase() === 'complete') {
      this.task.complete = true;
    } else if (this.task.status.toLowerCase() === 'in progress') {
      this.task.complete = false;
    }
    this.taskServices.addTask(this.task).subscribe(() => {
      // console.log('Success');
      this.task = {
        title: '',
        description: '',
        id: '',
        complete: true,
        status: '',
      };
      this.toastr.success('Task is Added', 'Success!');
      this.router.navigate(['/home']);
    });
  }
}
