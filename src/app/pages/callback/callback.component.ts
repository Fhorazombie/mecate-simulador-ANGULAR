import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  template: `<p class="text-white text-center mt-20">Autenticando... 🖤</p>`,
})
export class CallbackComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      if (token) {
        localStorage.setItem('access_token', token);
        this.router.navigate(['/']); // Redirige donde quieras
      } else {
        console.error('No se recibió token');
        this.router.navigate(['/']);
      }
    });
  }
}
