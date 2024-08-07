import { Component, inject, Input, Output } from '@angular/core';
//import { tasks } from './task.model';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
import { toArray } from 'rxjs';

interface task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-task',
  // standalone: true,
  //  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  private taskService = inject(TasksService)
  @Input() task!: task;

  onCompleteTask() {
    this.taskService.removetask(this.task.id);
  }
}
