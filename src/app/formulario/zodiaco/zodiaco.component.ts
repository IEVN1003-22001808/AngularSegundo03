import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Zodiaco } from './zodiaco';

@Component({
  selector: 'app-zodiaco',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})

export class ZodiacoComponent implements OnInit {
 
  datosFormulario!: FormGroup;
  resultado: any;
  calculo: Zodiaco = new Zodiaco();

  imagenChino: { [key: string]: string} = {
    'Mono': 'mono.jpg',
    'Gallo': 'gallo.jpg',
    'Perro': 'perro.jpg',
    'Cerdo': 'cerdo.jpg',
    'Rata': 'rata.jpg',
    'Buey': 'buey.jpg',
    'Tigre': 'tigre.jpg',
    'Conejo': 'conejo.jpg',
    'Dragón': 'dragon.jpg',
    'Serpiente': 'serpiente.jpg',
    'Caballo': 'caballo.jpg',
    'Cabra': 'cabra.jpg',
  }

  constructor() { }

  ngOnInit(): void {
    this.datosFormulario = new FormGroup({
      nombre: new FormControl(''),
      apaterno: new FormControl(''),
      amaterno: new FormControl(''),
      dia: new FormControl(''),
      mes: new FormControl(''),
      anio: new FormControl(''),
 
      sexo: new FormControl('')
    });
  }
  procesarDatos(): void {
 
    this.calculo.nombre = this.datosFormulario.value.nombre;
    this.calculo.apaterno = this.datosFormulario.value.apaterno;
    this.calculo.amaterno = this.datosFormulario.value.amaterno;
    this.calculo.dia = parseInt(this.datosFormulario.value.dia);
    this.calculo.mes = parseInt(this.datosFormulario.value.mes);
    this.calculo.anio = parseInt(this.datosFormulario.value.anio);
 
    this.calculo.procesar();
 
    this.resultado = {
 
      nombreCompleto: this.calculo.nombreCompleto,
      edad: this.calculo.edad,
      signoChino: this.calculo.signoChino,
      signoChinoI: this.imagenChino[this.calculo.signoChino]
 
    };
  }
}
