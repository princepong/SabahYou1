import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFindComponent } from './page-not-find/page-not-find.component';
import { GalleryChildComponent } from './gallery-child/gallery-child.component';
import galleryData from '../assets/gallery-data.json';
import badgeData from '../assets/badge-data.json';
import noteData from '../assets/note-data.json';
import preparationData from '../assets/preparation-data.json';
import langlnData from '../assets/langln-data.json';
import hotelData from '../assets/hotel-data.json';
import { BadgeComponent } from './badge/badge.component';

const seriesRoutes = galleryData.map((item: any) => ({
    path: `series/${item.imageAlt}`,
    title: item.imageAlt,
    component: GalleryChildComponent
}));

const badgesRoutes = badgeData.map((item: any) => ({
    path: `badges/${item.name}`,
    title: item.name,
    component: BadgeComponent
}));

const notesRoutes = noteData.map((item: any) => ({
    path: `notes/${item.name}`,
    title: item.name,
    component: BadgeComponent
}));

const preparationsRoutes = preparationData.map((item: any) => ({
    path: `preparations/${item.name}`,
    title: item.name,
    component: BadgeComponent
}));

const langlnRoutes = langlnData.map((item: any) => ({
    path: `langs/${item.name}`,
    title: item.name,
    component: BadgeComponent
}));

const hotelsRoutes = hotelData.map((item: any) => ({
    path: `hotels/${item.name}`,
    title: item.name,
    component: BadgeComponent
}));

export const routes: Routes = [
    { path: '', title: 'Sabah-Home', component: HomeComponent },
    { path: 'home', title: 'Sabah-Home', component: HomeComponent,
        children: [
            ...seriesRoutes,
            ...badgesRoutes,
            ...notesRoutes,
            ...preparationsRoutes,
            ...langlnRoutes,
            ...hotelsRoutes
        ]
    },
    { path: 'map', title: 'Sabah-Map', component: SecondComponent },
    { path: 'contact', title: 'Sabah-Contact', component: FirstComponent },
    { path: '**', title: '404', component: PageNotFindComponent }
];