from rubpy.types import Update as Message


async def delete_learned_bot(message: Message, database: dict):

    conversation = database["groups"][message.object_guid]["learns"]

    id_conversation = message.text.split("حذف یادگیری")[1].strip()

    try:
        id_conversation = int(id_conversation)
        if id_conversation < 1 or id_conversation > len(conversation):
            raise IndexError

        conversation.pop(id_conversation - 1)

        await message.reply(
            f"✅ یادگیری با ایدی [ {id_conversation} ] حذف شد!! \n\n⚠️ توجه ایدی ها اپدیت شدند!"
        )
    except (ValueError, IndexError):
        await message.reply("❌ لطفا عدد معتبر وارد نمایید!!")

    return database
