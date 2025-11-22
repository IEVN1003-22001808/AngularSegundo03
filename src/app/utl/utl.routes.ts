import { Routes } from "@angular/router";
export default[

  {
    path: 'listalumnos',
    loadComponent:()=>import('./alumnos/alumnos.component').then(m=>m.AlumnosComponent)
  },
 
  {
    path:'agregar',
    loadComponent:()=>import('./agregar/agregar.component').then(m=>m.AgregarComponent)
  },
 
  {
    path:'editar/:matricula',
    loadComponent:()=>import('./editar/editar.component').then(c=>c.EditarComponent)
  },
 
  {
    path:'eliminar/:matricula',
    loadComponent:()=>import('./eliminar/eliminar.component').then(c=>c.EliminarComponent)
  },
 
 
]as Routes