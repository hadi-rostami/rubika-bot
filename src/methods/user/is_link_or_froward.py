from rubpy.utils import is_rubika_link
from rubpy.types import Update as Message


async def is_link_or_froward(message: Message):
    if is_rubika_link(message.text) or message.find_keys("forwarded_from") is not None:
        await message.delete()
        await message.ban_member()
