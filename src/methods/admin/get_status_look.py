from rubpy.types import Update as Message


async def get_status_look(message: Message, database: dict):

    text = "".join(
        [
            "⚙️- قفل {} :{} \n".format(look["fa_name"], "✅" if look["value"] else "❌")
            for look in database["groups"][message.object_guid]["looks"]
        ]
    )

    await message.reply(text)

    return database
