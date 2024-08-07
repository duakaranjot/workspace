import { Component, Input } from '@angular/core';
import { newTask } from './task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  // standalone: true,
  // imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() name?: string;
  @Input() userId!: string;
  showAddtask: boolean = false;
  isAddingTask: boolean = false;

  constructor(private taskService: TasksService) {}

  get selectedUsertasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.showAddtask = true;
  }

  onCloseAddTask() {
    this.showAddtask = false;
  }
}
