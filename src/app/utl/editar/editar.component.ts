import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { ProyectoapiService } from '../proyectoapi.service';
import { AlumnosUtl } from '../alumnos';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './editar.component.html',
  styles: ``
})
export class EditarComponent implements OnInit {
  formGroup!: FormGroup;
  matricula: number = 0;

  regAlumno: AlumnosUtl = {
    matricula: 0,
    nombre: '',
    apaterno: '',
    amaterno: '',
    correo: ''
  };

  constructor(
    private fb: FormBuilder,
    public alumnosUtl: ProyectoapiService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.matricula = parseInt(this.activateRoute.snapshot.paramMap.get('matricula') || '0');

    this.regAlumno.matricula = this.matricula;

    this.alumnosUtl.getAlumno(this.matricula).subscribe({
      next: (response: any) => {
        this.regAlumno = response.alumno || response; 
      },
      error: (e) => console.error('Error al obtener alumno:', e)
    });
  }

  modificar() {
    this.alumnosUtl.modificarAlumno(this.matricula, this.regAlumno).subscribe({
      next: () => {
        console.log('Modificado correctamente');
        this.router.navigate(['/utl/listalumnos']);
      },
      error: (e) => console.error(e),
      complete: () => console.info('Modificación completada')
    });
  }
}