import { Component, inject, input, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { CommonModule } from '@angular/common';
import { dummyTasks } from '../dummy-tasks';
import { AddNewTaskComponent } from './add-new-task/add-new-task.component';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddNewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  //name = input<string>();

  //alternative way
  //@Input() name: string | undefined;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  isAddingTask: boolean = false;



  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask(): void {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
