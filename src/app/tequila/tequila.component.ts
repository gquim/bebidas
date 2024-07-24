import { Component } from '@angular/core';
import { CoctelesService } from '../services/cocteles.service';

@Component({
  selector: 'app-tequila',
  standalone: true,
  imports: [],
  providers:[CoctelesService],
  templateUrl: './tequila.component.html',
  styleUrl: './tequila.component.css'
})
export class TequilaComponent {
  cocteles: any[]=[]
  drink = "tequila"
  constructor(private coctelService: CoctelesService){}
  ngOnInit(): void {
    this.coctelService.getCocteles(this.drink).subscribe(datos => {
      this.cocteles = datos.drinks;
    })
  }
}
 