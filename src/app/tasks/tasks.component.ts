import { Component, Input } from '@angular/core';
import { newTask } from './task.model';

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
  //isAddingTask:boolean = false;
  tasks = [
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

  get selectUsertasks() {
    return this.tasks.filter((x) => x.userId == this.userId);
  }

  oncompletetask(id:any) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.showAddtask = true;
  }

  onCancleAddTask() {
    this.showAddtask = false;
  }

  onAddTask(taskData:newTask){
    this.tasks.push(
      {
        id:new Date().getTime().toString(),
        userId:this.userId,
        title:taskData.tile,
        summary:taskData.summary,
        dueDate:taskData.date
      }
    )
    this.showAddtask = false;


  }
}
