from rubpy.types import Update as Message


async def update_event(message: Message, database: dict):
    event_name = message.text.replace("اپدیت ایونت", "").strip()
    off_event = event_name.endswith("خاموش")

    if off_event:
        event_name = event_name[: -len("خاموش")].strip()

    result = await message.client.get_messages_by_id(
        message.object_guid, [message.reply_message_id]
    )

    text = result.messages[0].find_keys("text")

    if text is None:
        return database

    is_changed = False

    for event in database["groups"][message.object_guid]["events"]:
        if event["event_fa_name"] == event_name:
            event["event_value"] = False if off_event else text
            is_changed = True
            break

    if is_changed:
        await message.reply(
            "» ایونت {} با موفقیت {} شد.".format(
                event_name, "خاموش" if off_event else "اپدیت"
            )
        )

    return database
