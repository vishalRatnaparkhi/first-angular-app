import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { NewTask } from './new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Input({ required: true} ) userId!:string;
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTask>();

  private tasksService =inject(TasksService)
  enteredTitle='';
  enteredSummary='';
  enteredDate='';

  onClose()
  {
      this.close.emit();
  }
  onSubmit()
  {

    this.tasksService.addTask({
      title: this.enteredTitle, 
      summary:this.enteredSummary, 
      date: this.enteredDate
    }, this.userId);
    this.close.emit();

  }
}
