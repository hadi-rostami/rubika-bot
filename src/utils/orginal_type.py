from rubpy.types import Update as Message


async def get_orginal_type(message: Message):
    type_message = message.message.type

    if type_message == "FileInline":
        type_message = message.message.file_inline.type
    elif type_message == "Event":
        type_message = message.message.event_data.type

    return type_message
