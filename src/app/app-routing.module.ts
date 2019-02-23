import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
      path        : 'apps',
      loadChildren: './main/apps/apps.module#AppsModule'
  },
  {
      path        : 'pages',
      loadChildren: './main/pages/pages.module#PagesModule'
  },
  {
      path        : 'ui',
      loadChildren: './main/ui/ui.module#UIModule'
  },
  {
      path        : 'documentation',
      loadChildren: './main/documentation/documentation.module#DocumentationModule'
  },
  {
      path        : 'angular-material-elements',
      loadChildren: './main/angular-material-elements/angular-material-elements.module#AngularMaterialElementsModule'
  },
  {
      path      : '**',
      redirectTo: 'apps/dashboards/analytics'
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
