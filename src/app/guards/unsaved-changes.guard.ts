import { CanDeactivateFn } from '@angular/router';
import { AddStudentComponent } from '../pages/add-student/add-student';

export const UnsavedChangesGuard: CanDeactivateFn<AddStudentComponent> = (component) => {
  if (component.hasUnsavedChanges) {
    return confirm('Есть несохранённые данные. Уйти со страницы?');
  }
  return true;
};
