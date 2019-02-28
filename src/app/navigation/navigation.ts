import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'sample',
                title    : 'Sample',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/sample',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'association',
                title    : 'Association',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'group',
                url      : '/association',
            },
            {
                id       : 'entreprise',
                title    : 'Entreprise',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'business',
                url      : '/entreprise',
            },
            {
                id       : 'professionel',
                title    : 'Professionel',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'work',
                url      : '/professionel',
            }
        ]
    }
];
