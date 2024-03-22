import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/services/task';
import { TaskService } from 'src/app/services/task.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css'],
})
export class TodoUpdateComponent implements OnInit {
  task: Task = {
    description: '',
    complete: true,
    title: '',
    id: '',
    status: '',
  };
  taskId: string | null = null;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.taskId = id;
      this.taskService.getTask(this.taskId).subscribe((task) => {
        this.task = task;
      });
    }
  }

  onSubmit(): void {
    if (this.taskId !== null) {
      if (this.task.status.toLowerCase() === 'complete') {
        this.task.complete = true;
      } else if (this.task.status.toLowerCase() === 'in progress') {
        this.task.complete = false;
      }

      this.taskService.updateTask(this.taskId, this.task).subscribe(() => {
        console.log('updated');
        this.toastr.success('Task is Updated', 'Success!');
        this.router.navigate(['/home']);
      });
    }
  }
}
