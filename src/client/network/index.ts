import Client from '../client';
import { delay, resolvePlatform, buildHeaders } from './utils';
import { NetworkTypes } from '../types/index.type';
import { getDcs, sendPayload, sendRequest } from './api';
import { setupWebSocket } from './websocket';
import UserAgent from 'user-agents';
import { download, uploadFile } from './file';

export default class Network {
	public headers: Record<string, string>;
	public defaultPlatform: NetworkTypes.Platform;
	public userAgent = new UserAgent().toString();
	public ws?: WebSocket;

	public apiUrl?: string;
	public wssUrl?: string;

	public heartbeatInterval?: NodeJS.Timeout;
	public inactivityTimeout?: NodeJS.Timeout;
	public reconnecting: boolean = false;

	constructor(public client: Client) {
		this.defaultPlatform = resolvePlatform(client.platform);
		this.headers = buildHeaders(client.platform);
	}

	getDcs = () => getDcs(this);
	request = (url: string, data: any) => sendRequest(this, url, data);
	send = (opts: any) => sendPayload(this, opts);
	getUpdates = async () => setupWebSocket(this);
	
	uploadFile = (filePath: string, chunkSize?: number) =>
		uploadFile(this, filePath, chunkSize);
	
	download = (
		dc_id: number,
		file_id: number,
		access_hash: string,
		size: number,
		chunk: number = 131072,
	) => download(this, dc_id, file_id, access_hash, size, chunk);
	
	delay = delay;
}