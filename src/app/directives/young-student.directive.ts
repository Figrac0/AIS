import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appYoungStudent]',
  standalone: true,
})
export class YoungStudentDirective implements OnInit {
  @Input('appYoungStudent') birthYear!: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    const age = currentYear - Number(this.birthYear);

    console.log('Проверка возраста:', this.birthYear, '->', age, 'лет');

    if (age < 18) {
      this.renderer.setStyle(this.el.nativeElement, 'font-style', 'italic');
      this.renderer.setStyle(this.el.nativeElement, 'color', '#555');
      this.renderer.setAttribute(this.el.nativeElement, 'title', 'Младше 18 лет');
    }
  }
}
