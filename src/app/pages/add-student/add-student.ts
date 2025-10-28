import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService, Student } from '../../services/students.service';
import { GroupsService, Group } from '../../services/groups.service';

@Component({
  standalone: true,
  selector: 'app-add-student',
  templateUrl: './add-student.html',
  styleUrls: ['./add-student.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class AddStudentComponent {
  studentForm: FormGroup;
  groups: Group[] = [];
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private studentsService: StudentsService,
    private groupsService: GroupsService,
    private router: Router
  ) {
    this.studentForm = this.fb.group({
      fullName: ['', Validators.required],
      birthYear: [
        '',
        [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())],
      ],
      groupId: ['', Validators.required],
      course: ['', [Validators.required, Validators.min(1), Validators.max(6)]],
      enrollYear: [
        '',
        [Validators.required, Validators.min(2000), Validators.max(new Date().getFullYear())],
      ],
    });
  }

  ngOnInit() {
    this.groupsService.getGroups().subscribe((data) => (this.groups = data));
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.studentForm.invalid) return;

    const newStudent: Student = {
      ...this.studentForm.value,
      groupId: Number(this.studentForm.value.groupId),
      course: Number(this.studentForm.value.course),
      enrollYear: Number(this.studentForm.value.enrollYear),
      birthYear: Number(this.studentForm.value.birthYear),
    };
    this.studentsService.addStudent(newStudent).subscribe(() => {
      alert(' Студент добавлен успешно!');
      this.router.navigate(['/groups']);
    });
  }

  get hasUnsavedChanges(): boolean {
    return this.studentForm.dirty && !this.isSubmitted;
  }
}
