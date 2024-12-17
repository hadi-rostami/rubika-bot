from rubpy.types import Update as Message
from ..methods.creators import add_group, remove_group
from ..database import read_database_async, write_database_async
from .admin_handler import admin_handler
from .user_handler import user_handler
from ..methods.fun import games, event_handler, conversation_bot
from time import time


async def main_handler(message: Message):
    start_time = time()
    database: dict = await read_database_async()
    is_group_activated = message.object_guid in database["groups"]

    if message.author_guid in database.get("creators", []):
        if message.text == "فعال سازی" and not is_group_activated:
            database = await add_group(message, database)

        elif message.text == "خاموش کردن" and is_group_activated:
            database = await remove_group(message, database)

    if message.object_guid in database["groups"]:
        is_user_admin = (
            message.author_guid in database["groups"][message.object_guid]["admins"]
        )

        database = (
            await admin_handler(message, database)
            if is_user_admin
            else await user_handler(message, database)
        )

        await event_handler(message, database["groups"][message.object_guid]["events"])
        await games(message, database["games"])
        await conversation_bot(
            message, database["groups"][message.object_guid]["learns"]
        )

    await write_database_async(database)

    print("time handled orders: {}".format(time() - start_time))
