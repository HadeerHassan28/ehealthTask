import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/services/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css'],
})
export class TodoUpdateComponent implements OnInit {
  task: Task = { description: '', status: '', title: '', id: '' };
  taskId: string | null = null;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.taskId = id;
      this.taskService.getTask(this.taskId).subscribe((task) => {
        this.task = task || { description: '', status: '' };
      });
    }
  }

  onSubmit(): void {
    if (this.taskId !== null) {
      this.taskService.updateTask(this.taskId, this.task).subscribe(() => {
        console.log('updated');
        this.router.navigate(['/home']);
      });
    }
  }
}
