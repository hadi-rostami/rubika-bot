from rubpy.types import Update as Message
from ...models.group_model import group_model


async def add_group(message: Message, database: dict):
    try:

        group_info = await message.client.get_group_info(message.object_guid)
        group_admins = await message.client.get_group_admin_members(message.object_guid)

        group_title = group_info.group.group_title

        admins = {
            admin.member_guid: admin.first_name or "username"
            for admin in group_admins.in_chat_members
        }

        database["groups"][message.object_guid] = await group_model(group_title, admins)

        await message.reply(
            f"» ربات با موفقیت در گروه [ {group_title} ] فعال شد.",
        )

    except Exception as e:
        await message.reply("» خطایی در فعال‌سازی ربات رخ داد.")
        print(f"Error occurred while adding group: {e}")

    return database
