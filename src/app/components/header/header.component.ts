import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  temaAtual: string = 'light';

  constructor(private readonly renderer: Renderer2, private readonly router: Router) {

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

  irParaCadastro() {
    this.router.navigate(['/cadastrar-pessoa']);
  }
}
