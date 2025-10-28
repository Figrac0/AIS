import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Student {
  id?: number;
  fullName: string;
  birthYear: number;
  groupId: number;
  course: number;
  enrollYear: number;
}

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private apiUrl = 'http://localhost:3000/students';

  constructor(private http: HttpClient) {}

  // Получить всех студентов
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  // Получить студентов по id группы
  getStudentsByGroup(groupId: number): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}?groupId=${groupId}`);
  }

  // Добавить нового студента
  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }

  // Обновить данные студента
  updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/${student.id}`, student);
  }

  // Удалить студента
  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
