import Bot from '../..';
import { FileTypeEnum } from '../../types/enums';

async function requestSendFile(this: Bot, type: FileTypeEnum) {
	return await this.builder('requestSendFile', { type });
}

export default requestSendFile;
