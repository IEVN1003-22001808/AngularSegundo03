import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: 'Auth', loadChildren: () => import ('./auth/features/auth.routes').then((papu) => papu.default) },

    { path: 'Formulario', loadChildren: () => import ('./formulario/formulario.routes').then((papu) => papu.default) },

    { path: 'UTL', loadChildren: () => import ('./utl/utl.routes').then((papu) => papu.default) },

];
