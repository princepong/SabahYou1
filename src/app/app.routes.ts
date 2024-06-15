import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFindComponent } from './page-not-find/page-not-find.component';
import { GalleryChildComponent } from './gallery-child/gallery-child.component';
import galleryData from '../assets/gallery-data.json';

// const seriesRoutes = galleryData.map((item: any) => {
//     return {path: `series/${item.seriesId}`, title: item.seriesId, component: GalleryChildComponent};
// });

export const routes: Routes = [
    { path: '', title:'Sabah-Home', component: HomeComponent },
    { path: "home", title:'Sabah-Home', component: HomeComponent,
        children: [
            {path: 'series/MK11', title:'MK11', component: GalleryChildComponent},
            {path: 'series/MK05', title:'MK05', component: GalleryChildComponent},
            {path: 'series/MK01', title:'MK01', component: GalleryChildComponent},
            {path: 'series/SK43', title:'SK43', component: GalleryChildComponent},
            {path: 'series/SK03', title:'SK03', component: GalleryChildComponent},
            {path: 'series/SK42', title:'SK42', component: GalleryChildComponent},
            {path: 'series/SK41', title:'SK41', component: GalleryChildComponent},
            {path: 'series/SK06', title:'SK06', component: GalleryChildComponent},
            {path: 'series/SF02', title:'SF02', component: GalleryChildComponent},
            {path: 'series/LK03', title:'LK03', component: GalleryChildComponent},

        ]
    },
    { path: "map", title:'Sabah-Map', component: SecondComponent },
    { path: "contact",title:'Sabah-Contact', component: FirstComponent },
    { path: '', redirectTo: '/', pathMatch: 'full'},
    { path: '**', title:'404', component: PageNotFindComponent }
];
