import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-juros',
  standalone: true,
  templateUrl: './juros.component.html',
  styleUrls: ['./juros.component.css'],
  imports: [FormsModule],
})
export class JurosComponent implements OnInit {
  valor: number;
  meses: number;
  taxa: number;

  calcjuros() {
    return (this.taxa / 100) * this.meses * this.valor;
  }

  constructor() {}

  ngOnInit() {}
}
