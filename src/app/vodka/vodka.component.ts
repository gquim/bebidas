import { Component } from '@angular/core';
import { CoctelesService } from '../services/cocteles.service';

@Component({
  selector: 'app-vodka',
  standalone: true,
  imports: [],
  providers:[CoctelesService],
  templateUrl: './vodka.component.html',
  styleUrl: './vodka.component.css'
})
export class VodkaComponent {
  cocteles: any[]=[]
  drink = "vodka"
  constructor(private coctelService: CoctelesService){}
  ngOnInit(): void {
    this.coctelService.getCocteles(this.drink).subscribe(datos => {
      this.cocteles = datos.drinks;
    })
  }
}
 