import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  temaAtual: string = 'light';

  constructor(private readonly renderer: Renderer2) {
    // Inicialmente define o tema
    this.renderer.addClass(document.body, 'light-theme');
  }

  alternarTema(): void {
    if (this.temaAtual === 'light') {
      this.renderer.removeClass(document.body, 'light-theme');
      this.renderer.addClass(document.body, 'dark-theme');
      this.temaAtual = 'dark';
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
      this.renderer.addClass(document.body, 'light-theme');
      this.temaAtual = 'light';
    }
  }
}
