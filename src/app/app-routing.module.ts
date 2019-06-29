import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: 'home', loadChildren: './home/home.module#HomePageModule' },
  //{ path: 'contactos', loadChildren: './contactos/contactos.module#ContactosPageModule' },
  //{ path: 'pruebas', loadChildren: './pruebas/pruebas.module#PruebasPageModule' },
  //{ path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' }
  //{ path: 'my-test', loadChildren: '../../e2e/my-test/my-test.component#MyTestComponent' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
