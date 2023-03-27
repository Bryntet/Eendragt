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
        },
        [RoleType.sweden]: {
            name: '🇸🇪 Sweden',
            description: 'We\'re from Sweden, and that\'s pretty dope.'
        },
        [RoleType.norway]: {
            name: '🇳🇴 Norway',
            description: 'We\'re from Norway, and that\'s pretty dope.'
        },
        [RoleType.denmark]: {
            name: '🇩🇰 Denmark',
            description: 'We\'re from Denmark, and that\'s pretty dope.'
        },
        [RoleType.finland]: {
            name: '🇫🇮 Finland',
            description: 'We\'re from Finland, and that\'s pretty dope.'
        },
        [RoleType.iceland]: {
            name: '🇮🇸 Iceland',
            description: 'We\'re from Iceland, and that\'s pretty dope.'
        },
        [RoleType.sami]: {
            name: '<:samiflag:1089990859589697607> Sami',
            description: 'We\'re from Sàpmi, and that\'s pretty dope.'
        },
    };
}
