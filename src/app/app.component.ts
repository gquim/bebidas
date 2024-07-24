import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CoctelesService } from './services/cocteles.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule,RouterOutlet,RouterLink],
  providers: [CoctelesService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /* cocteles: any[]=[]
  drik=''
  constructor(private coctelService: CoctelesService){}
  ngOnInit(): void {
    this.coctelService.getCocteles(this.drik).subscribe(datos => {
      this.cocteles = datos.drinks;
    })
  } */
}
 