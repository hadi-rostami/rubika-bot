from rubpy.types import Update as Message
from ..methods.user import is_spam, is_link_or_froward


async def user_handler(message: Message, database: dict):
    database["groups"][message.object_guid]["spam"] = await is_spam(
        message, database["groups"][message.object_guid]["spam"]
    )

    if message.text:
        await is_link_or_froward(message)



    return database