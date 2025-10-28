import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService, Student } from '../../services/students.service';
import { GroupsService, Group } from '../../services/groups.service';

@Component({
  standalone: true,
  selector: 'app-edit-student',
  templateUrl: './edit-student.html',
  styleUrls: ['./edit-student.scss'],
  imports: [CommonModule, FormsModule],
})
export class EditStudentComponent implements OnInit {
  student: Student | null = null;
  groups: Group[] = [];
  isSaving = false;
  currentYear = new Date().getFullYear(); // ✅ добавляем

  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService,
    private groupsService: GroupsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.groupsService.getGroups().subscribe((g) => (this.groups = g));

    this.studentsService.getStudents().subscribe((data) => {
      this.student = data.find((s) => String(s.id) === id) || null;
    });
  }

  onSubmit(): void {
    if (!this.student) return;
    this.isSaving = true;

    const updatedStudent = {
      ...this.student,
      groupId: Number(this.student.groupId),
      birthYear: Number(this.student.birthYear),
      course: Number(this.student.course),
      enrollYear: Number(this.student.enrollYear),
    };

    this.studentsService.updateStudent(updatedStudent).subscribe(() => {
      alert(' Данные студента обновлены!');
      this.router.navigate(['/groups']);
    });
  }
}
