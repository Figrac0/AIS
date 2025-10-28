import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreetingComponent } from './pages/greeting/greeting';
import { AboutComponent } from './pages/about/about';
import { GroupsComponent } from './pages/groups/groups';
import { AddStudentComponent } from './pages/add-student/add-student';
import { UnsavedChangesGuard } from './guards/unsaved-changes.guard';

const routes: Routes = [
  { path: '', redirectTo: 'greeting', pathMatch: 'full' },
  { path: 'greeting', component: GreetingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'groups/:id', component: GroupsComponent },
  { path: 'add-student', component: AddStudentComponent, canDeactivate: [UnsavedChangesGuard] },
  { path: '**', redirectTo: 'greeting' }, // редирект на приветствие при неверном URL
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
