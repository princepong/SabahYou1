import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
// import { PageNotFindComponent } from './page-not-find/page-not-find.component';

// export class RouteConsts {
//     public static readonly Home = $localize`:@@home:home`;
//     public static readonly First = $localize`:@@first:first`;
//     public static readonly Second = $localize`:@@second:second`;
//   }

export const routes: Routes = [
    { path: '', title:'Home', component: HomeComponent },
    { path: "home", title:'Home', component: HomeComponent },
    { path: "first", title:'First', component: FirstComponent },
    { path: "second",title:'Second', component: SecondComponent }
    //{ path: '', redirectTo: '/', pathMatch: 'full'},
    //{ path: '**', title:'404', component: PageNotFindComponent }
];
