import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-greeting',
  templateUrl: './greeting.html',
  styleUrls: ['./greeting.scss'],
  imports: [FormsModule, CommonModule],
})
export class GreetingComponent {
  name = '';
  greetedName = '';

  greet() {
    this.greetedName = this.name.trim();
  }
}
