import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavComponent } from './shared/nav/nav';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [CommonModule, RouterOutlet, RouterLink, NavComponent],
})
export class AppComponent {
  title = 'Digital Department Application';
}
