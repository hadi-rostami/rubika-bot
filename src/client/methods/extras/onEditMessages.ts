import Message from "../../contexts/message.type";
import Client from "../../client";

function onEditMessages(
  this: Client,
  object_guid: string,
  callback: (message: Message) => any,
) {
  let state = Math.round(Date.now() / 1000) - 150;
  const messagesIDs = new Set<string>();

  const getUpdates = async () => {
    try {
      const messagesupdate = await this.getMessagesUpdates(object_guid, state);
      const newMessagesIDs = new Set<string>();
      if (!messagesupdate?.updated_messages) return;
      for (const message of messagesupdate?.updated_messages) {
        if (message.action === "Edit" && !messagesIDs.has(message.message_id)) {
          messagesIDs.add(message.message_id);
          await callback(message);
        }
        newMessagesIDs.add(message.message_id);
      }

      for (const id of messagesIDs) {
        if (!newMessagesIDs.has(id)) {
          messagesIDs.delete(id);
        }
      }
      state = messagesupdate.new_state;
    } catch (error) {
      this.logger.error("Error fetching message updates:" + error, "error");
    }
  };

  setInterval(getUpdates, 29 * 1000);
}

export default onEditMessages;
