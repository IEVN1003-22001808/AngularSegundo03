import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Distancia } from './distancia';

@Component({
  selector: 'app-distancia',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent implements OnInit{

  formulario!: FormGroup;
  resultado!: number;
  calculo: Distancia = new Distancia();

  constructor() {}
  
  ngOnInit(): void {
    this.formulario = new FormGroup({
      numero1: new FormControl(''),
      numero2: new FormControl(''),
      numero3: new FormControl(''),
      numero4: new FormControl(''),
    });
  }
  multNumeros(): void{
 
    this.calculo.x1 = parseFloat(this.formulario.value.numero1);
    this.calculo.y1 = parseFloat(this.formulario.value.numero3);
    this.calculo.x2 = parseFloat(this.formulario.value.numero2);
    this.calculo.y2 = parseFloat(this.formulario.value.numero4);
 
    this.calculo.calcularDistancia();
 
    this.resultado = this.calculo.distanciaFinal;
   
  }
}

