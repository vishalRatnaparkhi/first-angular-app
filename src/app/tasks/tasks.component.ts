import { Component, Input, importProvidersFrom } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTask } from './new-task/new-task.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input ({required:true}) name!:string;
  @Input({required:true}) userId!:string;
  isAddingTask = false;

 private tasksService: TasksService;

 constructor(tasksService : TasksService){
  this.tasksService=tasksService;
 }
get selectedUserTask(){
  return this.tasksService.getUserTasks(this.userId);
}

onCompleteTask(id: string)
{
  this.tasksService.removeTask(id);
}

onStartAddTask()
{
 this.isAddingTask=true;
}
onCloseAddTask()
{
  this.isAddingTask=false;
}

}
