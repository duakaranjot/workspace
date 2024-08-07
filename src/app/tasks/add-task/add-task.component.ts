import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { newTask } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  //standalone: true,
  // imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Input() userId!:string;
  // @Input() showAddTask!: boolean;
  @Output() close = new EventEmitter();
  // @Output() addTask = new EventEmitter<newTask>();
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';
//this alternate way to constructor based approach to initiate the service in a component
  private taskService = inject(TasksService)

  onCancelTask() {
    this.close.emit();
  }

  OnSubmit() {
    this.taskService.addTask({ tile: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,},this.userId)
        this.close.emit()
  }
}
