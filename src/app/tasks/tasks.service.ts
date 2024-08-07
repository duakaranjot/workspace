import { Injectable } from '@angular/core';
import { newTask } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() {}

  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular and how to apply them',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular and how to apply them',
      dueDate: '2025-12-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular and how to apply them',
      dueDate: '2025-12-31',
    },
  ];
  
  getUserTasks(userId: string) {
    return this.tasks.filter((x) => x.userId == userId);
  }

  addTask(taskData: newTask, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.tile,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
  }

  removetask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
