import { RoleType } from '../Enums/RoleType';
import IRole from '../Interfaces/IRole';

export default class RolesConstants {

    public static readonly ROLES: { [key in RoleType]: IRole } = {
        [RoleType.Soldier]: {
            name: '🪖 Soldier',
            description: 'We fight stuff, and that\'s pretty dope.',
        },
        [RoleType.Builder]: {
            name: '👷 Builder',
            description: 'We build stuff, and that\'s pretty dope.',
        },
        [RoleType.Artist]: {
            name: '🧑‍🎨 Pixel Artist',
            description: 'We draff stuff, and that\'s pretty dope.',
        },
        [RoleType.Diplomat]: {
            name: '🤝 Diplomat',
            description: 'We talk stuff, and that\'s pretty dope.',
        },
        [RoleType.Reporter]: {
            name: '📰 Historian',
            description: 'We write stuff, and that\'s pretty dope.',
        },
        [RoleType.Support]: {
            name: '👮 Helper',
            description: 'We help stuff, and that\'s pretty dope.',
        }
    };
}
