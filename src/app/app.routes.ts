import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: 'auth', loadChildren: () => import ('./auth/features/auth.routes').then((papu) => papu.default) },

    { path: 'formulario', loadChildren: () => import ('./formulario/formulario.routes').then((papu) => papu.default) },

    { path: 'utl', loadChildren: () => import ('./utl/utl.routes').then((papu) => papu.default) },

];
