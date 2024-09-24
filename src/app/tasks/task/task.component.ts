import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CardComponent,
    DatePipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  private tasksService = inject(TasksService);

  onCompleteTask(): void {
    this.tasksService.removeTask(this.task.id);
  }
}
