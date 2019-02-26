import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministrationModule } from './administration/administration.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ChatModule } from './chat/chat.module';
import { CompetitionsModule} from './competitions/competitions.module';
import { EquipeModule } from './equipe/equipe.module';
import { EvenementModule } from './evenement/evenement.module';
import { GeolocalisationModule } from './geolocalisation/geolocalisation.module';
import { InscriptionModule } from './inscription/inscription.module';
import { InvitationModule } from './invitation/invitation.module';
import { JoueurModule } from './joueur/joueur.module';
import { NouvellesSportNatureModule } from './nouvelles-sport-nature/nouvelles-sport-nature.module';
import { PaiementModule } from './paiement/paiement.module';
import { ProfessionelModule } from './professionel/professionel.module';
import { PubliciteModule } from './publicite/publicite.module';
import { RechercheModule } from './recherche/recherche.module';
import { RecommandationModule } from './recommandation/recommandation.module';
import { SocieteModule } from './societe/societe.module';
import { SportModule } from './sport/sport.module';


const appRoutes: Routes = [
    {
        path        : 'auth',
        loadChildren: './main/Apps/pages/authentication.module#AuthenticationModule'
    }
];


@NgModule({
    imports: [
        AdministrationModule,
        AuthenticationModule,
        ChatModule,
        CompetitionsModule,
        EquipeModule,
        EvenementModule,
        GeolocalisationModule,
        InscriptionModule,
        InvitationModule,
        JoueurModule,
        NouvellesSportNatureModule,
        PaiementModule,
        ProfessionelModule,
        PubliciteModule,
        RechercheModule,
        RecommandationModule,
        SocieteModule,
        SportModule
    ]
})
export class PagesModule
{

}
