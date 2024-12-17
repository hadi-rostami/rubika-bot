from rubpy.types import Update as Message


async def status_events(message: Message, database: dict):

    text = "".join(
        [
            "{}- ایونت {}: {}\n".format(
                index,
                event["event_fa_name"],
                (
                    "❌ تنظیم نشده!"
                    if event["event_value"] is False
                    else "\n" + event["event_value"] + "\n"
                ),
            )
            for index, event in enumerate(
                database["groups"][message.object_guid]["events"], 1
            )
        ]
    )

    await message.reply("» لیست یادگیری های ربات:\n\n" + text)

    return database
