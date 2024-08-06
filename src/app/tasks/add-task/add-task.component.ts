import { Component, EventEmitter, Input, Output } from '@angular/core';
import { newTask } from '../task.model';

@Component({
  selector: 'app-add-task',
  //standalone: true,
  // imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Input() showAddTask!: boolean;
  @Output() cancelTask = new EventEmitter();
  @Output() addTask = new EventEmitter<newTask>();
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';

  onCancelTask() {
    this.cancelTask.emit();
  }

  OnSubmit() {
    this.addTask.emit({
      tile: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    });
  }
}
