import { Component } from '@angular/core';
import { CoctelesService } from '../services/cocteles.service';

@Component({
  selector: 'app-margarita',
  standalone: true,
  imports: [],
  providers:[CoctelesService],
  templateUrl: './margarita.component.html',
  styleUrl: './margarita.component.css'
})
export class MargaritaComponent {
  cocteles: any[]=[]
  drink = "margarita"
  constructor(private coctelService: CoctelesService){}
  ngOnInit(): void {
    this.coctelService.getCocteles(this.drink).subscribe(datos => {
      this.cocteles = datos.drinks;
    })
  }
}
 