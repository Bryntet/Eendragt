import { EmbedBuilder } from 'discord.js';
import RolesConstants from '../Constants/RolesConstants';
import SettingsConstants from '../Constants/SettingsConstants';
import { RoleType } from '../Enums/RoleType';

export default class OnboardingEmbeds {

    public static GetWelcomeEmbed() {
        const embed = new EmbedBuilder()
            .setColor(SettingsConstants.COLORS.DEFAULT)
            .setTitle('Place Nordics')
            .addFields(
                {
                    name: 'Welcome',
                    value: 'What brings you to our server?'

                }
            );
        return embed;
    }

    public static GetPlacerEmbed() {
        const embed = new EmbedBuilder()
            .setColor(SettingsConstants.COLORS.DEFAULT)
            .setTitle('Thank you for wanting to help!')
            .setDescription('I want to help by:')
            .addFields(
                {
                    name: RolesConstants.ROLES[RoleType.Soldier].name,
                    value: RolesConstants.ROLES[RoleType.Soldier].description,
                },
                {
                    name: RolesConstants.ROLES[RoleType.Builder].name,
                    value: RolesConstants.ROLES[RoleType.Builder].description,
                },
                {
                    name: 'There are more roles',
                    value: `Get more roles over here: <#${SettingsConstants.CHANNELS.MORE_ROLES_ID}>!`,
                }
            );
        return embed;
    }

}
