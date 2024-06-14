import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFindComponent } from './page-not-find/page-not-find.component';
import { GalleryComponent } from './gallery/gallery.component';


export const routes: Routes = [
    { path: '', title:'Sabah-Home', component: HomeComponent },
    { path: "home", title:'Sabah-Home', component: HomeComponent},
    { path: "map", title:'Sabah-Map', component: SecondComponent },
    { path: "contact",title:'Sabah-Contact', component: FirstComponent },
    { path: '', redirectTo: '/', pathMatch: 'full'},
    { path: '**', title:'404', component: PageNotFindComponent }
];
