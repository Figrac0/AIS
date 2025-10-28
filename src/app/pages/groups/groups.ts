import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router'; // 👈 добавь это
import { GroupsService, Group } from '../../services/groups.service';
import { StudentsService, Student } from '../../services/students.service';
import { YoungStudentDirective } from '../../directives/young-student.directive';
import { CenturyPipe } from '../../pipes/century.pipe';

@Component({
  standalone: true,
  selector: 'app-groups',
  templateUrl: './groups.html',
  styleUrls: ['./groups.scss'],
  imports: [CommonModule, FormsModule, RouterLink, YoungStudentDirective, CenturyPipe], // 👈 добавь RouterLink сюда
})
export class GroupsComponent implements OnInit {
  groups: Group[] = [];
  students: Student[] = [];
  filteredStudents: Student[] = [];
  selectedGroupId: number | null = null;
  selectedGroup: Group | null = null;

  constructor(private groupsService: GroupsService, private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.groupsService.getGroups().subscribe((data) => {
      this.groups = data;
      console.log(' Группы:', data);
    });

    this.studentsService.getStudents().subscribe((data) => {
      this.students = data;
      console.log(' Студенты:', data);
    });
  }

  onGroupChange(): void {
    if (this.selectedGroupId !== null) {
      this.selectedGroup = this.groups.find((g) => g.id === Number(this.selectedGroupId)) || null;
      this.filteredStudents = this.students.filter(
        (s) => s.groupId === Number(this.selectedGroupId)
      );
      console.log(` Студенты группы ${this.selectedGroup?.number ?? '—'}:`, this.filteredStudents);
    } else {
      this.filteredStudents = [];
      this.selectedGroup = null;
    }
  }
}
