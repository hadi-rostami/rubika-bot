from rubpy.types import Update as Message


async def list_conversations(message: Message, database: dict):
    conversations = database["groups"][message.object_guid]["learns"]
    
    if not conversations:
        await message.reply("❌ هیچ چیزی به ربات یاد داده نشده است!!")
        return database

    text = "".join(
        [
            f"[ {index} ] ( {conversation['key']} ) -> ( {conversation['value']} )\n"
            for index, conversation in enumerate(conversations, 1)
        ]
    )

    await message.reply("» لیست یادگیری های ربات : \n\n" + text)

    return database
