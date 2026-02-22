import Client from '../client';

import * as Advanced from './advanced';
import * as Auth from './auth';
import * as Channels from './channels';
import * as Chats from './chats';
import * as Contacts from './contacts';
import * as Extras from './extras';
import * as Gif from './gif';
import * as Groups from './groups';
import * as Messages from './messages';
import * as Settings from './settings';
import * as Stickers from './stickers';
import * as Users from './users';
import * as Utilities from './utilities';

export default class Methods {
	// advanced

	async builder(
		this: Client,
		...args: Parameters<typeof Advanced.builder>
	): Promise<any> {
		return Advanced.builder.apply(this, args);
	}

	// auth

	async registerDevice(
		this: Client,
		...args: Parameters<typeof Auth.registerDevice>
	): Promise<any> {
		return Auth.registerDevice.apply(this, args);
	}

	async sendCode(
		this: Client,
		...args: Parameters<typeof Auth.sendCode>
	): Promise<any> {
		return Auth.sendCode.apply(this, args);
	}

	async signIn(
		this: Client,
		...args: Parameters<typeof Auth.signIn>
	): Promise<any> {
		return Auth.signIn.apply(this, args);
	}

	async logout(
		this: Client,
		...args: Parameters<typeof Auth.logout>
	): Promise<any> {
		return Auth.logout.apply(this, args);
	}

	// channels
	async addChannel(
		this: Client,
		...args: Parameters<typeof Channels.addChannel>
	): Promise<any> {
		return Channels.addChannel.apply(this, args);
	}

	async addChannelMembers(
		this: Client,
		...args: Parameters<typeof Channels.addChannelMembers>
	): Promise<any> {
		return Channels.addChannelMembers.apply(this, args);
	}

	async banChannelMember(
		this: Client,
		...args: Parameters<typeof Channels.banChannelMember>
	): Promise<any> {
		return Channels.banChannelMember.apply(this, args);
	}

	async channelPreviewByJoinLink(
		this: Client,
		...args: Parameters<typeof Channels.channelPreviewByJoinLink>
	): Promise<any> {
		return Channels.channelPreviewByJoinLink.apply(this, args);
	}

	async leaveChannelVoiceChat(
		this: Client,
		...args: Parameters<typeof Channels.leaveChannelVoiceChat>
	): Promise<any> {
		return Channels.leaveChannelVoiceChat.apply(this, args);
	}
	async cancelChangeObjectOwner(
		this: Client,
		...args: Parameters<typeof Channels.cancelChangeObjectOwner>
	): Promise<any> {
		return Channels.cancelChangeObjectOwner.apply(this, args);
	}
	async requestChangeObjectOwner(
		this: Client,
		...args: Parameters<typeof Channels.requestChangeObjectOwner>
	): Promise<any> {
		return Channels.requestChangeObjectOwner.apply(this, args);
	}
	async getPendingObjectOwner(
		this: Client,
		...args: Parameters<typeof Channels.getPendingObjectOwner>
	): Promise<any> {
		return Channels.getPendingObjectOwner.apply(this, args);
	}

	async checkChannelUsername(
		this: Client,
		...args: Parameters<typeof Channels.checkChannelUsername>
	): Promise<any> {
		return Channels.checkChannelUsername.apply(this, args);
	}

	async createChannelVoiceChat(
		this: Client,
		...args: Parameters<typeof Channels.createChannelVoiceChat>
	): Promise<any> {
		return Channels.createChannelVoiceChat.apply(this, args);
	}

	async discardChannelVoiceChat(
		this: Client,
		...args: Parameters<typeof Channels.discardChannelVoiceChat>
	): Promise<any> {
		return Channels.discardChannelVoiceChat.apply(this, args);
	}

	async editChannelInfo(
		this: Client,
		...args: Parameters<typeof Channels.editChannelInfo>
	): Promise<any> {
		return Channels.editChannelInfo.apply(this, args);
	}

	async getBannedChannelMembers(
		this: Client,
		...args: Parameters<typeof Channels.getBannedChannelMembers>
	): Promise<any> {
		return Channels.getBannedChannelMembers.apply(this, args);
	}

	async getChannelAdminAccessList(
		this: Client,
		...args: Parameters<typeof Channels.getChannelAdminAccessList>
	): Promise<any> {
		return Channels.getChannelAdminAccessList.apply(this, args);
	}

	async getChannelAdminMembers(
		this: Client,
		...args: Parameters<typeof Channels.getChannelAdminMembers>
	): Promise<any> {
		return Channels.getChannelAdminMembers.apply(this, args);
	}

	async getChannelAllMembers(
		this: Client,
		...args: Parameters<typeof Channels.getChannelAllMembers>
	): Promise<any> {
		return Channels.getChannelAllMembers.apply(this, args);
	}

	async getChannelInfo(
		this: Client,
		...args: Parameters<typeof Channels.getChannelInfo>
	): Promise<any> {
		return Channels.getChannelInfo.apply(this, args);
	}

	async getChannelLink(
		this: Client,
		...args: Parameters<typeof Channels.getChannelLink>
	): Promise<any> {
		return Channels.getChannelLink.apply(this, args);
	}

	async joinChannelAction(
		this: Client,
		...args: Parameters<typeof Channels.joinChannelAction>
	): Promise<any> {
		return Channels.joinChannelAction.apply(this, args);
	}

	async joinChannelByLink(
		this: Client,
		...args: Parameters<typeof Channels.joinChannelByLink>
	): Promise<any> {
		return Channels.joinChannelByLink.apply(this, args);
	}

	async removeChannel(
		this: Client,
		...args: Parameters<typeof Channels.removeChannel>
	): Promise<any> {
		return Channels.removeChannel.apply(this, args);
	}

	async seenChannelMessages(
		this: Client,
		...args: Parameters<typeof Channels.seenChannelMessages>
	): Promise<any> {
		return Channels.seenChannelMessages.apply(this, args);
	}

	async setChannelLink(
		this: Client,
		...args: Parameters<typeof Channels.setChannelLink>
	): Promise<any> {
		return Channels.setChannelLink.apply(this, args);
	}

	async setChannelVoiceChatSetting(
		this: Client,
		...args: Parameters<typeof Channels.setChannelVoiceChatSetting>
	): Promise<any> {
		return Channels.setChannelVoiceChatSetting.apply(this, args);
	}

	async updateChannelUsername(
		this: Client,
		...args: Parameters<typeof Channels.updateChannelUsername>
	): Promise<any> {
		return Channels.updateChannelUsername.apply(this, args);
	}

	// chats

	async deleteAvatar(
		this: Client,
		...args: Parameters<typeof Chats.deleteAvatar>
	): Promise<any> {
		return Chats.deleteAvatar.apply(this, args);
	}

	async deleteChatHistory(
		this: Client,
		...args: Parameters<typeof Chats.deleteChatHistory>
	): Promise<any> {
		return Chats.deleteChatHistory.apply(this, args);
	}

	async getAbsObjects(
		this: Client,
		...args: Parameters<typeof Chats.getAbsObjects>
	): Promise<any> {
		return Chats.getAbsObjects.apply(this, args);
	}

	async getAvatars(
		this: Client,
		...args: Parameters<typeof Chats.getAvatars>
	): Promise<any> {
		return Chats.getAvatars.apply(this, args);
	}

	async clickMessageUrl(
		this: Client,
		...args: Parameters<typeof Chats.clickMessageUrl>
	): Promise<any> {
		return Chats.clickMessageUrl.apply(this, args);
	}

	async searchGlobalMessages(
		this: Client,
		...args: Parameters<typeof Chats.searchGlobalMessages>
	): Promise<any> {
		return Chats.searchGlobalMessages.apply(this, args);
	}

	async getChatReaction(
		this: Client,
		...args: Parameters<typeof Chats.getChatReaction>
	): Promise<any> {
		return Chats.getChatReaction.apply(this, args);
	}

	async sendLive(
		this: Client,
		...args: Parameters<typeof Chats.sendLive>
	): Promise<any> {
		return Chats.sendLive.apply(this, args);
	}
	async getLivePlayUrl(
		this: Client,
		...args: Parameters<typeof Chats.getLivePlayUrl>
	): Promise<any> {
		return Chats.getLivePlayUrl.apply(this, args);
	}
	async getLiveComments(
		this: Client,
		...args: Parameters<typeof Chats.getLiveComments>
	): Promise<any> {
		return Chats.getLiveComments.apply(this, args);
	}
	async getLiveStatus(
		this: Client,
		...args: Parameters<typeof Chats.getLiveStatus>
	): Promise<any> {
		return Chats.getLiveStatus.apply(this, args);
	}
	async addLiveComment(
		this: Client,
		...args: Parameters<typeof Chats.addLiveComment>
	): Promise<any> {
		return Chats.addLiveComment.apply(this, args);
	}
	async createJoinLink(
		this: Client,
		...args: Parameters<typeof Chats.createJoinLink>
	): Promise<any> {
		return Chats.createJoinLink.apply(this, args);
	}

	async editJoinLink(
		this: Client,
		...args: Parameters<typeof Chats.editJoinLink>
	): Promise<any> {
		return Chats.editJoinLink.apply(this, args);
	}

	async removeJoinLink(
		this: Client,
		...args: Parameters<typeof Chats.removeJoinLink>
	): Promise<any> {
		return Chats.removeJoinLink.apply(this, args);
	}

	async getJoinRequests(
		this: Client,
		...args: Parameters<typeof Chats.getJoinRequests>
	): Promise<any> {
		return Chats.getJoinRequests.apply(this, args);
	}

	async actionOnJoinRequest(
		this: Client,
		...args: Parameters<typeof Chats.actionOnJoinRequest>
	): Promise<any> {
		return Chats.actionOnJoinRequest.apply(this, args);
	}

	async getChats(
		this: Client,
		...args: Parameters<typeof Chats.getChats>
	): Promise<any> {
		return Chats.getChats.apply(this, args);
	}

	async getChatsUpdates(
		this: Client,
		...args: Parameters<typeof Chats.getChatsUpdates>
	): Promise<any> {
		return Chats.getChatsUpdates.apply(this, args);
	}

	async getTopChatUsers(
		this: Client,
		...args: Parameters<typeof Chats.getTopChatUsers>
	): Promise<any> {
		return Chats.getTopChatUsers.apply(this, args);
	}

	async getObjectInfoByUsername(
		this: Client,
		...args: Parameters<typeof Chats.getObjectInfoByUsername>
	): Promise<any> {
		return Chats.getObjectInfoByUsername.apply(this, args);
	}

	async removeFromTopChatUsers(
		this: Client,
		...args: Parameters<typeof Chats.removeFromTopChatUsers>
	): Promise<{}> {
		return Chats.removeFromTopChatUsers.apply(this, args);
	}

	async getLinkFromAppUrl(
		this: Client,
		...args: Parameters<typeof Chats.getLinkFromAppUrl>
	): Promise<any> {
		return Chats.getLinkFromAppUrl.apply(this, args);
	}

	async searchChatMessages(
		this: Client,
		...args: Parameters<typeof Chats.searchChatMessages>
	): Promise<any> {
		return Chats.searchChatMessages.apply(this, args);
	}

	async seenChats(
		this: Client,
		...args: Parameters<typeof Chats.seenChats>
	): Promise<any> {
		return Chats.seenChats.apply(this, args);
	}

	async sendChatActivity(
		this: Client,
		...args: Parameters<typeof Chats.sendChatActivity>
	): Promise<any> {
		return Chats.sendChatActivity.apply(this, args);
	}

	async setActionChat(
		this: Client,
		...args: Parameters<typeof Chats.setActionChat>
	): Promise<any> {
		return Chats.setActionChat.apply(this, args);
	}

	async uploadAvatar(
		this: Client,
		...args: Parameters<typeof Chats.uploadAvatar>
	): Promise<any> {
		return Chats.uploadAvatar.apply(this, args);
	}

	// contacts

	async addAddressBook(
		this: Client,
		...args: Parameters<typeof Contacts.addAddressBook>
	): Promise<any> {
		return Contacts.addAddressBook.apply(this, args);
	}

	async deleteContact(
		this: Client,
		...args: Parameters<typeof Contacts.deleteContact>
	): Promise<any> {
		return Contacts.deleteContact.apply(this, args);
	}

	async getContacts(
		this: Client,
		...args: Parameters<typeof Contacts.getContacts>
	): Promise<any> {
		return Contacts.getContacts.apply(this, args);
	}

	async getContactsLastOnline(
		this: Client,
		...args: Parameters<typeof Contacts.getContactsLastOnline>
	): Promise<any> {
		return Contacts.getContactsLastOnline.apply(this, args);
	}

	async resetContacts(
		this: Client,
		...args: Parameters<typeof Contacts.resetContacts>
	): Promise<any> {
		return Contacts.resetContacts.apply(this, args);
	}

	async getContactsUpdates(
		this: Client,
		...args: Parameters<typeof Contacts.getContactsUpdates>
	): Promise<any> {
		return Contacts.getContactsUpdates.apply(this, args);
	}

	// extras

	async banMember(
		this: Client,
		...args: Parameters<typeof Extras.banMember>
	): Promise<any> {
		return Extras.banMember.apply(this, args);
	}

	async getInfo(
		this: Client,
		...args: Parameters<typeof Extras.getInfo>
	): Promise<any> {
		return Extras.getInfo.apply(this, args);
	}

	async getObjectByUsername(
		this: Client,
		...args: Parameters<typeof Extras.getObjectByUsername>
	): Promise<any> {
		return Extras.getObjectByUsername.apply(this, args);
	}

	async getProfileLinkItems(
		this: Client,
		...args: Parameters<typeof Extras.getProfileLinkItems>
	): Promise<any> {
		return Extras.getProfileLinkItems.apply(this, args);
	}

	async getRelatedObjects(
		this: Client,
		...args: Parameters<typeof Extras.getRelatedObjects>
	): Promise<any> {
		return Extras.getRelatedObjects.apply(this, args);
	}

	async getTranscription(
		this: Client,
		...args: Parameters<typeof Extras.getTranscription>
	): Promise<any> {
		return Extras.getTranscription.apply(this, args);
	}

	async onEditMessages(
		this: Client,
		...args: Parameters<typeof Extras.onEditMessages>
	): Promise<any> {
		return Extras.onEditMessages.apply(this, args);
	}

	async join(
		this: Client,
		...args: Parameters<typeof Extras.join>
	): Promise<any> {
		return Extras.join.apply(this, args);
	}

	async leaveChat(
		this: Client,
		...args: Parameters<typeof Extras.leaveChat>
	): Promise<any> {
		return Extras.leaveChat.apply(this, args);
	}

	async reportObject(
		this: Client,
		...args: Parameters<typeof Extras.reportObject>
	): Promise<any> {
		return Extras.reportObject.apply(this, args);
	}

	async searchGlobalObjects(
		this: Client,
		...args: Parameters<typeof Extras.searchGlobalObjects>
	): Promise<any> {
		return Extras.searchGlobalObjects.apply(this, args);
	}

	async transcribeVoice(
		this: Client,
		...args: Parameters<typeof Extras.transcribeVoice>
	): Promise<any> {
		return Extras.transcribeVoice.apply(this, args);
	}

	async userIsAdmin(
		this: Client,
		...args: Parameters<typeof Extras.userIsAdmin>
	): Promise<any> {
		return Extras.userIsAdmin.apply(this, args);
	}

	async deleteMessagebyCount(
		this: Client,
		...args: Parameters<typeof Extras.deleteMessagebyCount>
	): Promise<any> {
		return Extras.deleteMessagebyCount.apply(this, args);
	}

	async joinVoiceChat(
		this: Client,
		...args: Parameters<typeof Extras.joinVoiceChat>
	): Promise<any> {
		return Extras.joinVoiceChat.apply(this, args);
	}

	async setVoiceChatState(
		this: Client,
		...args: Parameters<typeof Extras.setVoiceChatState>
	): Promise<any> {
		return Extras.setVoiceChatState.apply(this, args);
	}

	async sendVoiceChatActivity(
		this: Client,
		...args: Parameters<typeof Extras.sendVoiceChatActivity>
	): Promise<any> {
		return Extras.sendVoiceChatActivity.apply(this, args);
	}

	// gif

	async addToMyGifSet(
		this: Client,
		...args: Parameters<typeof Gif.addToMyGifSet>
	): Promise<any> {
		return Gif.addToMyGifSet.apply(this, args);
	}

	async getMyGifSet(
		this: Client,
		...args: Parameters<typeof Gif.getMyGifSet>
	): Promise<any> {
		return Gif.getMyGifSet.apply(this, args);
	}

	async removeFromMyGifSet(
		this: Client,
		...args: Parameters<typeof Gif.removeFromMyGifSet>
	): Promise<any> {
		return Gif.removeFromMyGifSet.apply(this, args);
	}

	// group

	async addGroup(
		this: Client,
		...args: Parameters<typeof Groups.addGroup>
	): Promise<any> {
		return Groups.addGroup.apply(this, args);
	}

	async addGroupMembers(
		this: Client,
		...args: Parameters<typeof Groups.addGroupMembers>
	): Promise<any> {
		return Groups.addGroupMembers.apply(this, args);
	}

	async banGroupMember(
		this: Client,
		...args: Parameters<typeof Groups.banGroupMember>
	): Promise<any> {
		return Groups.banGroupMember.apply(this, args);
	}

	async discardGroupVoiceChat(
		this: Client,
		...args: Parameters<typeof Groups.discardGroupVoiceChat>
	): Promise<any> {
		return Groups.discardGroupVoiceChat.apply(this, args);
	}

	async createGroupVoiceChat(
		this: Client,
		...args: Parameters<typeof Groups.createGroupVoiceChat>
	): Promise<any> {
		return Groups.createGroupVoiceChat.apply(this, args);
	}

	async deleteNoAccessGroupChat(
		this: Client,
		...args: Parameters<typeof Groups.deleteNoAccessGroupChat>
	): Promise<any> {
		return Groups.deleteNoAccessGroupChat.apply(this, args);
	}

	async editGroupInfo(
		this: Client,
		...args: Parameters<typeof Groups.editGroupInfo>
	): Promise<any> {
		return Groups.editGroupInfo.apply(this, args);
	}

	async getBannedGroupMembers(
		this: Client,
		...args: Parameters<typeof Groups.getBannedGroupMembers>
	): Promise<any> {
		return Groups.getBannedGroupMembers.apply(this, args);
	}

	async getGroupAdminAccessList(
		this: Client,
		...args: Parameters<typeof Groups.getGroupAdminAccessList>
	): Promise<any> {
		return Groups.getGroupAdminAccessList.apply(this, args);
	}

	async getGroupAdminMembers(
		this: Client,
		...args: Parameters<typeof Groups.getGroupAdminMembers>
	): Promise<any> {
		return Groups.getGroupAdminMembers.apply(this, args);
	}

	async getGroupOnlineCount(
		this: Client,
		...args: Parameters<typeof Groups.getGroupOnlineCount>
	): Promise<any> {
		return Groups.getGroupOnlineCount.apply(this, args);
	}

	async getGroupAllMembers(
		this: Client,
		...args: Parameters<typeof Groups.getGroupAllMembers>
	): Promise<any> {
		return Groups.getGroupAllMembers.apply(this, args);
	}

	async getGroupDefaultAccess(
		this: Client,
		...args: Parameters<typeof Groups.getGroupDefaultAccess>
	): Promise<any> {
		return Groups.getGroupDefaultAccess.apply(this, args);
	}

	async getGroupInfo(
		this: Client,
		...args: Parameters<typeof Groups.getGroupInfo>
	): Promise<any> {
		return Groups.getGroupInfo.apply(this, args);
	}

	async getGroupLink(
		this: Client,
		...args: Parameters<typeof Groups.getGroupLink>
	): Promise<any> {
		return Groups.getGroupLink.apply(this, args);
	}

	async getGroupMentionList(
		this: Client,
		...args: Parameters<typeof Groups.getGroupMentionList>
	): Promise<any> {
		return Groups.getGroupMentionList.apply(this, args);
	}

	async getGroupVoiceChatUpdates(
		this: Client,
		...args: Parameters<typeof Groups.getGroupVoiceChatUpdates>
	): Promise<any> {
		return Groups.getGroupVoiceChatUpdates.apply(this, args);
	}

	async groupPreviewByJoinLink(
		this: Client,
		...args: Parameters<typeof Groups.groupPreviewByJoinLink>
	): Promise<any> {
		return Groups.groupPreviewByJoinLink.apply(this, args);
	}

	async joinGroup(
		this: Client,
		...args: Parameters<typeof Groups.joinGroup>
	): Promise<any> {
		return Groups.joinGroup.apply(this, args);
	}

	async leaveGroup(
		this: Client,
		...args: Parameters<typeof Groups.leaveGroup>
	): Promise<any> {
		return Groups.leaveGroup.apply(this, args);
	}

	async leaveGroupVoiceChat(
		this: Client,
		...args: Parameters<typeof Groups.leaveGroupVoiceChat>
	): Promise<any> {
		return Groups.leaveGroupVoiceChat.apply(this, args);
	}

	async removeGroup(
		this: Client,
		...args: Parameters<typeof Groups.removeGroup>
	): Promise<any> {
		return Groups.removeGroup.apply(this, args);
	}

	async setGroupAdmin(
		this: Client,
		...args: Parameters<typeof Groups.setGroupAdmin>
	): Promise<any> {
		return Groups.setGroupAdmin.apply(this, args);
	}

	async setGroupDefaultAccess(
		this: Client,
		...args: Parameters<typeof Groups.setGroupDefaultAccess>
	): Promise<any> {
		return Groups.setGroupDefaultAccess.apply(this, args);
	}

	async seenGroupMessages(
		this: Client,
		...args: Parameters<typeof Groups.seenGroupMessages>
	): Promise<any> {
		return Groups.seenGroupMessages.apply(this, args);
	}

	async setGroupLink(
		this: Client,
		...args: Parameters<typeof Groups.setGroupLink>
	): Promise<any> {
		return Groups.setGroupLink.apply(this, args);
	}

	async setGroupVoiceChatSetting(
		this: Client,
		...args: Parameters<typeof Groups.setGroupVoiceChatSetting>
	): Promise<any> {
		return Groups.setGroupVoiceChatSetting.apply(this, args);
	}
	async joinGroupVoiceChat(
		this: Client,
		...args: Parameters<typeof Groups.joinGroupVoiceChat>
	): Promise<any> {
		return Groups.joinGroupVoiceChat.apply(this, args);
	}
	async getGroupVoiceChatParticipants(
		this: Client,
		...args: Parameters<typeof Groups.getGroupVoiceChatParticipants>
	): Promise<any> {
		return Groups.getGroupVoiceChatParticipants.apply(this, args);
	}

	// messages

	async actionOnMessageReaction(
		this: Client,
		...args: Parameters<typeof Messages.actionOnMessageReaction>
	): Promise<any> {
		return Messages.actionOnMessageReaction.apply(this, args);
	}

	async createPoll(
		this: Client,
		...args: Parameters<typeof Messages.createPoll>
	): Promise<any> {
		return Messages.createPoll.apply(this, args);
	}

	async deleteMessages(
		this: Client,
		...args: Parameters<typeof Messages.deleteMessages>
	): Promise<any> {
		return Messages.deleteMessages.apply(this, args);
	}

	async editMessage(
		this: Client,
		...args: Parameters<typeof Messages.editMessage>
	): Promise<any> {
		return Messages.editMessage.apply(this, args);
	}

	async forwardMessages(
		this: Client,
		...args: Parameters<typeof Messages.forwardMessages>
	): Promise<any> {
		return Messages.forwardMessages.apply(this, args);
	}

	async getMessagesByID(
		this: Client,
		...args: Parameters<typeof Messages.getMessagesByID>
	): Promise<any> {
		return Messages.getMessagesByID.apply(this, args);
	}

	async getMessagesInterval(
		this: Client,
		...args: Parameters<typeof Messages.getMessagesInterval>
	): Promise<any> {
		return Messages.getMessagesInterval.apply(this, args);
	}

	async getMessagesUpdates(
		this: Client,
		...args: Parameters<typeof Messages.getMessagesUpdates>
	): Promise<any> {
		return Messages.getMessagesUpdates.apply(this, args);
	}

	async getMessageShareUrl(
		this: Client,
		...args: Parameters<typeof Messages.getMessageShareUrl>
	): Promise<any> {
		return Messages.getMessageShareUrl.apply(this, args);
	}

	async getPollOptionVoters(
		this: Client,
		...args: Parameters<typeof Messages.getPollOptionVoters>
	): Promise<any> {
		return Messages.getPollOptionVoters.apply(this, args);
	}

	async getPollStatus(
		this: Client,
		...args: Parameters<typeof Messages.getPollStatus>
	): Promise<any> {
		return Messages.getPollStatus.apply(this, args);
	}

	async sendDocument(
		this: Client,
		...args: Parameters<typeof Messages.sendDocument>
	): Promise<any> {
		return Messages.sendDocument.apply(this, args);
	}

	async sendGif(
		this: Client,
		...args: Parameters<typeof Messages.sendGif>
	): Promise<any> {
		return Messages.sendGif.apply(this, args);
	}

	async sendMessage(
		this: Client,
		...args: Parameters<typeof Messages.sendMessage>
	): Promise<any> {
		return Messages.sendMessage.apply(this, args);
	}

	async sendMusic(
		this: Client,
		...args: Parameters<typeof Messages.sendMusic>
	): Promise<any> {
		return Messages.sendMusic.apply(this, args);
	}

	async sendPhoto(
		this: Client,
		...args: Parameters<typeof Messages.sendPhoto>
	): Promise<any> {
		return Messages.sendPhoto.apply(this, args);
	}

	//   async sendSticker(
	//     this: Client,
	//     ...args: Parameters<typeof Messages.sendSticker>
	//   ): Promise<any> {
	//     return Messages.sendSticker.apply(this, args);
	//   }

	async sendVideo(
		this: Client,
		...args: Parameters<typeof Messages.sendVideo>
	): Promise<any> {
		return Messages.sendVideo.apply(this, args);
	}

	async sendVideoMessage(
		this: Client,
		...args: Parameters<typeof Messages.sendVideoMessage>
	): Promise<any> {
		return Messages.sendVideoMessage.apply(this, args);
	}

	async sendVoice(
		this: Client,
		...args: Parameters<typeof Messages.sendVoice>
	): Promise<any> {
		return Messages.sendVoice.apply(this, args);
	}

	async setPinMessage(
		this: Client,
		...args: Parameters<typeof Messages.setPinMessage>
	): Promise<any> {
		return Messages.setPinMessage.apply(this, args);
	}

	async votePoll(
		this: Client,
		...args: Parameters<typeof Messages.votePoll>
	): Promise<any> {
		return Messages.votePoll.apply(this, args);
	}

	async sendText(
		this: Client,
		...args: Parameters<typeof Messages.sendText>
	): Promise<any> {
		return Messages.sendText.apply(this, args);
	}

	async getMessages(
		this: Client,
		...args: Parameters<typeof Messages.getMessages>
	): Promise<any> {
		return Messages.getMessages.apply(this, args);
	}

	async sendFileInline(
		this: Client,
		...args: Parameters<typeof Messages.sendFileInline>
	): Promise<any> {
		return Messages.sendFileInline.apply(this, args);
	}

	//   // settings

	async deleteFolder(
		this: Client,
		...args: Parameters<typeof Settings.deleteFolder>
	): Promise<any> {
		return Settings.deleteFolder.apply(this, args);
	}

	async getBlockedUsers(
		this: Client,
		...args: Parameters<typeof Settings.getBlockedUsers>
	): Promise<any> {
		return Settings.getBlockedUsers.apply(this, args);
	}

	async getFolders(
		this: Client,
		...args: Parameters<typeof Settings.getFolders>
	): Promise<any> {
		return Settings.getFolders.apply(this, args);
	}

	async getMySessions(
		this: Client,
		...args: Parameters<typeof Settings.getMySessions>
	): Promise<any> {
		return Settings.getMySessions.apply(this, args);
	}

	async getPrivacySetting(
		this: Client,
		...args: Parameters<typeof Settings.getPrivacySetting>
	): Promise<any> {
		return Settings.getPrivacySetting.apply(this, args);
	}

	async getSuggestedFolders(
		this: Client,
		...args: Parameters<typeof Settings.getSuggestedFolders>
	): Promise<any> {
		return Settings.getSuggestedFolders.apply(this, args);
	}

	async getTwoPasscodeStatus(
		this: Client,
		...args: Parameters<typeof Settings.getTwoPasscodeStatus>
	): Promise<any> {
		return Settings.getTwoPasscodeStatus.apply(this, args);
	}

	async setupTwoStepVerification(
		this: Client,
		...args: Parameters<typeof Settings.setupTwoStepVerification>
	): Promise<any> {
		return Settings.setupTwoStepVerification.apply(this, args);
	}

	async setSetting(
		this: Client,
		...args: Parameters<typeof Settings.setSetting>
	): Promise<any> {
		return Settings.setSetting.apply(this, args);
	}

	async terminateSession(
		this: Client,
		...args: Parameters<typeof Settings.terminateSession>
	): Promise<any> {
		return Settings.terminateSession.apply(this, args);
	}

	async updateProfile(
		this: Client,
		...args: Parameters<typeof Settings.updateProfile>
	): Promise<any> {
		return Settings.updateProfile.apply(this, args);
	}

	async updateUsername(
		this: Client,
		...args: Parameters<typeof Settings.updateUsername>
	): Promise<any> {
		return Settings.updateUsername.apply(this, args);
	}
	async changePassword(
		this: Client,
		...args: Parameters<typeof Settings.changePassword>
	): Promise<any> {
		return Settings.changePassword.apply(this, args);
	}
	async turnOffTwoStep(
		this: Client,
		...args: Parameters<typeof Settings.turnOffTwoStep>
	): Promise<any> {
		return Settings.turnOffTwoStep.apply(this, args);
	}
	async verifyRecoveryEmail(
		this: Client,
		...args: Parameters<typeof Settings.verifyRecoveryEmail>
	): Promise<any> {
		return Settings.verifyRecoveryEmail.apply(this, args);
	}
	async requestRecoveryEmail(
		this: Client,
		...args: Parameters<typeof Settings.requestRecoveryEmail>
	): Promise<any> {
		return Settings.requestRecoveryEmail.apply(this, args);
	}
	async checkTwoStepPasscode(
		this: Client,
		...args: Parameters<typeof Settings.checkTwoStepPasscode>
	): Promise<any> {
		return Settings.checkTwoStepPasscode.apply(this, args);
	}
	async terminateOtherSessions(
		this: Client,
		...args: Parameters<typeof Settings.terminateOtherSessions>
	): Promise<any> {
		return Settings.terminateOtherSessions.apply(this, args);
	}

	//   //  stickers

	async actionOnStickerSet(
		this: Client,
		...args: Parameters<typeof Stickers.actionOnStickerSet>
	): Promise<any> {
		return Stickers.actionOnStickerSet.apply(this, args);
	}

	async getMyStickerSets(
		this: Client,
		...args: Parameters<typeof Stickers.getMyStickerSets>
	): Promise<any> {
		return Stickers.getMyStickerSets.apply(this, args);
	}

	async getStickersByEmoji(
		this: Client,
		...args: Parameters<typeof Stickers.getStickersByEmoji>
	): Promise<any> {
		return Stickers.getStickersByEmoji.apply(this, args);
	}

	async getStickersBySetIds(
		this: Client,
		...args: Parameters<typeof Stickers.getStickersBySetIds>
	): Promise<any> {
		return Stickers.getStickersBySetIds.apply(this, args);
	}

	async getStickerSetByID(
		this: Client,
		...args: Parameters<typeof Stickers.getStickerSetByID>
	): Promise<any> {
		return Stickers.getStickerSetByID.apply(this, args);
	}

	async getTrendStickerSets(
		this: Client,
		...args: Parameters<typeof Stickers.getTrendStickerSets>
	): Promise<any> {
		return Stickers.getTrendStickerSets.apply(this, args);
	}

	async searchStickers(
		this: Client,
		...args: Parameters<typeof Stickers.searchStickers>
	): Promise<any> {
		return Stickers.searchStickers.apply(this, args);
	}

	//   // users

	async checkUserUsername(
		this: Client,
		...args: Parameters<typeof Users.checkUserUsername>
	): Promise<any> {
		return Users.checkUserUsername.apply(this, args);
	}

	async deleteUserChat(
		this: Client,
		...args: Parameters<typeof Users.deleteUserChat>
	): Promise<any> {
		return Users.deleteUserChat.apply(this, args);
	}

	async getMe(
		this: Client,
		...args: Parameters<typeof Users.getMe>
	): Promise<any> {
		return Users.getMe.apply(this, args);
	}

	async getUserInfo(
		this: Client,
		...args: Parameters<typeof Users.getUserInfo>
	): Promise<any> {
		return Users.getUserInfo.apply(this, args);
	}

	async setBlockUser(
		this: Client,
		...args: Parameters<typeof Users.setBlockUser>
	): Promise<any> {
		return Users.setBlockUser.apply(this, args);
	}

	//   // utilities

	async download(
		this: Client,
		...args: Parameters<typeof Utilities.download>
	): Promise<any> {
		return Utilities.download.apply(this, args);
	}

	async downloadProfilePicture(
		this: Client,
		...args: Parameters<typeof Utilities.downloadProfilePicture>
	): Promise<any> {
		return Utilities.downloadProfilePicture.apply(this, args);
	}

	async usePlugin(
		this: Client,
		...args: Parameters<typeof Utilities.usePlugin>
	): Promise<any> {
		return Utilities.usePlugin.apply(this, args);
	}

	async run(
		this: Client,
		...args: Parameters<typeof Utilities.run>
	): Promise<any> {
		return Utilities.run.apply(this, args);
	}

	async requestSendFile(
		this: Client,
		...args: Parameters<typeof Utilities.requestSendFile>
	): Promise<any> {
		return Utilities.requestSendFile.apply(this, args);
	}

	async start(
		this: Client,
		...args: Parameters<typeof Utilities.start>
	): Promise<any> {
		return Utilities.start.apply(this, args);
	}
}
