import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistanciaComponent } from './formulario/distancia/distancia.component';
import { ZodiacoComponent } from './formulario/zodiaco/zodiaco.component';
import { AxbComponent } from './formulario/axb/axb.component';
import { TempComponent } from './tem/temp/temp.component';

import { initFlowbite } from 'flowbite';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DistanciaComponent, ZodiacoComponent, AxbComponent, NavbarComponent, TempComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'AngularSegundo03';

  ngOnInit(): void {
    initFlowbite();
  }
}
