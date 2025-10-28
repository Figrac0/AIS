import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { GreetingComponent } from './app/pages/greeting/greeting';
import { AboutComponent } from './app/pages/about/about';
import { GroupsComponent } from './app/pages/groups/groups';
import { AddStudentComponent } from './app/pages/add-student/add-student';
import { UnsavedChangesGuard } from './app/guards/unsaved-changes.guard';
import { EditStudentComponent } from './app/pages/edit-student/edit-student';
import { loggerInterceptor } from './app/interceptors/logger.interceptor';

const routes: Routes = [
  { path: '', redirectTo: 'greeting', pathMatch: 'full' },
  { path: 'greeting', component: GreetingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'add-student', component: AddStudentComponent, canDeactivate: [UnsavedChangesGuard] },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: '**', redirectTo: 'greeting' },
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, FormsModule, ReactiveFormsModule),
    provideRouter(routes),
    provideHttpClient(withInterceptors([loggerInterceptor])),
  ],
}).catch((err) => console.error(err));
