from rubpy.types import Update as Message
from random import choice


async def conversation_bot(message: Message, conversations: dict):
       
    if not conversations:
        return

    texts = []
    for speak in conversations:
        if speak["key"] == message.text:
            texts.append(speak["value"])

    if texts:
        await message.reply(choice(texts))

