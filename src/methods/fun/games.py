from rubpy.types import Update as Message
from ...utils.request import requset


async def games(message: Message , games : dict):
    for game in games:
        if message.text == game["text"]:
            await message.reply(await requset("GET", game["url"]))
