from rubpy.types import Update as Message


async def learned_bot(message: Message, database: dict):
    learn_text = message.text.split("یادبگیر")[1].strip()

    result = await message.client.get_messages_by_id(
        message.object_guid, [message.reply_message_id]
    )
    key_text = result.messages[0].find_keys("text")


    if not key_text or not learn_text:
        return database


    database['groups'][message.object_guid]['learns'].append(
        {
            "key": key_text,
            "value": learn_text,
        }
    )


    await message.reply("یادگرفتم 🫡")

    return database
