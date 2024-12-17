from rubpy.types import Update as Message


async def remove_group(message: Message, database: dict):

    await message.reply(
        f"» ربات در گروه [ {database["groups"][message.object_guid]["title"]} ] غیر فعال شد.",
    )

    del database["groups"][message.object_guid]

    return database
