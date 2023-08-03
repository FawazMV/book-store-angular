import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoggeInAuthGuard } from './Guards/loggedIn.guard'
import { LogoutAuthGuard } from './Guards/logout.guard'
import { CartManageComponent } from './Pages/Cart/cart-manage/cart-manage.component'
import { HomeManageComponent } from './Pages/Home/home-manage/home-manage.component'
import { ErrorComponent } from './Pages/Layout/error/error.component'

const routes: Routes = [
  { path: '', component: HomeManageComponent },
  {
    path: 'auth',
    canActivate: [LoggeInAuthGuard],
    loadChildren: () =>
      import('./Pages/Auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'cart',
    component: CartManageComponent,
    canActivate: [LogoutAuthGuard]
  },
  { path: '**', component: ErrorComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
