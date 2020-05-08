import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="menu">
      <p class="menu-label">Menu</p>
      <ul class="menu-list">
        <a routerLink="/products" routerLinkActive="router-link-active">
          <span>Products</span>
        </a>
        <a routerLink="/admin" routerLinkActive="router-link-active">
          <span>Admin</span>
        </a>
        <a routerLink="/about" routerLinkActive="router-link-active">
          <span>About</span>
        </a>
        <a routerLink="/signin" routerLinkActive="router-link-active">
          <span>Sign in</span>
        </a>
      </ul>
    </nav>
  `,
})
export class NavComponent {}
