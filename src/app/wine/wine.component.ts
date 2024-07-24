import { Component } from '@angular/core';
import { CoctelesService } from '../services/cocteles.service';

@Component({
  selector: 'app-wine',
  standalone: true,
  imports: [],
  providers:[CoctelesService],
  templateUrl: './wine.component.html',
  styleUrl: './wine.component.css'
})
export class WineComponent {
  cocteles: any[]=[]
  drink = "wine"
  constructor(private coctelService: CoctelesService){}
  ngOnInit(): void {
    this.coctelService.getCocteles(this.drink).subscribe(datos => {
      this.cocteles = datos.drinks;
    })
  }
}
