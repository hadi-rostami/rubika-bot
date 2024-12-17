from rubpy.types import Update as Message


async def update_admins(message: Message, database: dict):
    group_admins = await message.client.get_group_admin_members(message.object_guid)

    admins = {
        admin.member_guid: admin.first_name or "username"
        for admin in group_admins.in_chat_members
    }
    database["groups"][message.object_guid]["admins"] = admins

    await message.reply('» لیست مدیران گروه برای ربات بهروزرسانی شد.')

    return database
