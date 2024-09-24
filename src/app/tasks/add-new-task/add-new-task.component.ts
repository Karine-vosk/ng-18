import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-add-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-task.component.html',
  styleUrl: './add-new-task.component.scss',
})
export class AddNewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<boolean>();

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';

  private tasksService = inject(TasksService)

  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');

  onCancel(): void {
    this.close.emit();
  }

  onSubmit(): void {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate
      }, this.userId
    );
    this.close.emit();
  }
}
