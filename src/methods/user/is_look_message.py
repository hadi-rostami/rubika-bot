from rubpy.types import Update as Message
from ...utils import get_orginal_type


async def is_look_message(message: Message, looks: dict):
    orginal_type = await get_orginal_type(message)

    for look in looks:
        if look["en_name"] == orginal_type:
            if look["value"] == True:
                await message.delete()
            break
