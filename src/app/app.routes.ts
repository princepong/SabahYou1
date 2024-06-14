import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFindComponent } from './page-not-find/page-not-find.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryChildComponent } from './gallery-child/gallery-child.component';


export const routes: Routes = [
    { path: '', title:'Sabah-Home', component: HomeComponent },
    { path: "home", title:'Sabah-Home', component: HomeComponent,
        children: [
            {path: 'MK11', title:'MK11', component: GalleryChildComponent},
            {path: 'MK05', title:'MK05', component: GalleryChildComponent},
            {path: 'MK01', title:'MK01', component: GalleryChildComponent},
            {path: 'SK43', title:'SK43', component: GalleryChildComponent},
            {path: 'SK03', title:'SK03', component: GalleryChildComponent},
            {path: 'SK42', title:'SK42', component: GalleryChildComponent},
            {path: 'SK41', title:'SK41', component: GalleryChildComponent},
            {path: 'SK06', title:'SK06', component: GalleryChildComponent},
            {path: 'SF02', title:'SF02', component: GalleryChildComponent},
            {path: 'LK03', title:'LK03', component: GalleryChildComponent},

        ]
    },
    { path: "map", title:'Sabah-Map', component: SecondComponent },
    { path: "contact",title:'Sabah-Contact', component: FirstComponent },
    { path: '', redirectTo: '/', pathMatch: 'full'},
    { path: '**', title:'404', component: PageNotFindComponent }
];
