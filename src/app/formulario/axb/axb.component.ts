import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { lol } from './axb';

@Component({
  selector: 'app-axb',
  imports: [ReactiveFormsModule],
  templateUrl: './axb.component.html',
  styleUrl: './axb.component.css'
})
export class AxbComponent {

  axb!: FormGroup;
  resultado!: number;
  calculo: lol = new lol();

  constructor() {}
  
  ngOnInit(): void{
    this.axb = new FormGroup({
      aNum: new FormControl(''),
      bNum: new FormControl(''),
      xNum: new FormControl(''),
    })
  }
  papu(): void{
    this.calculo.a1 = this.axb.value.aNum;
    this.calculo.b1 = this.axb.value.bNum;
    this.calculo.metodo();
    this.resultado = this.calculo.sino;
  }
 
}

