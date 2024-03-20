import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/services/task';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  tasks: Task[] | undefined;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  loadTask(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
  delateTask(id: string): void {
    this.taskService.delateTask(id).subscribe(() => {
      console.log('Delated');
      this.loadTask();
    });
  }
}
