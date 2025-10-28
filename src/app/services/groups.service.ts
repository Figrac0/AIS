import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Group {
  id: number;
  number: string;
}

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  private apiUrl = 'http://localhost:3000/groups';

  constructor(private http: HttpClient) {}

  // Получить все группы
  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.apiUrl);
  }

  // Получить группу по id
  getGroupById(id: number): Observable<Group> {
    return this.http.get<Group>(`${this.apiUrl}/${id}`);
  }

  // Добавить группу
  addGroup(group: Group): Observable<Group> {
    return this.http.post<Group>(this.apiUrl, group);
  }

  // Обновить группу
  updateGroup(group: Group): Observable<Group> {
    return this.http.put<Group>(`${this.apiUrl}/${group.id}`, group);
  }

  // Удалить группу
  deleteGroup(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
