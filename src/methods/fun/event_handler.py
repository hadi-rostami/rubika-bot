from rubpy.types import Update as Message


async def event_handler(message: Message, events: dict):
    event_data = message.find_keys("event_data")

    if event_data is None:
        return

    for event in events:
        if event_data.type == event["event_en_name"]:
            if event["event_value"] is False:
                break
            
            await message.reply(event["event_value"])
            break
