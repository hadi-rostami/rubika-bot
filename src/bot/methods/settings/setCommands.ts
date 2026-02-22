import Bot from '../..';
import { Commend } from '../../types/methods';


async function setCommands(this: Bot, commands: Commend[]) {
	return await this.builder('setCommands', { bot_commands: commands });
}

export default setCommands;
