import { ContextMap } from '../types/client.type';
import Client from '../client';
import Activities from './activities.type';
import Chat from './chat.type';
import Message from './message.type';
import Notifications from './notifications.type';

export const ContextConstructors = {
	message: Message,
	chat: Chat,
	activities: Activities,
	notifications: Notifications,
  } satisfies Record<keyof ContextMap, new (client: Client, update: any) => any>;