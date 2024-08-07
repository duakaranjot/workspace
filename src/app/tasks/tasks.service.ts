import { Injectable } from '@angular/core';
import { newTask } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() {
    //in local storage will be always stored in a string and below is the methpod to get by key
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

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
    this.saveTasks()
  }

  removetask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks()
  }

  private saveTasks() {
    // method to get item from lovcal storage
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
