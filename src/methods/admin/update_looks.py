from rubpy.types import Update as Message


async def update_looks(message: Message, database: dict):
    is_look = "قفل" in message.text
    is_changed = False
    look_name = (
        message.text.replace("قفل", "").strip()
        if is_look
        else message.text.replace("بازکردن", "").strip()
    )

    for look in database["groups"][message.object_guid]["looks"]:
        if look["fa_name"] == look_name:
            look["value"] = is_look
            is_changed = True
            break

    if is_changed:
        await message.reply(
            "» {} با موفقیت {} شد.".format(look_name, "قفل" if is_look else "باز")
        )

    return database
