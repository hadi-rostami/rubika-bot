from rubpy.types import Update as Message
from ..commands.admin import COMMANDS


async def admin_handler(message: Message, database: dict):
    if not message.text:
        return database

    is_reply = message.reply_message_id is not None

    async def process_commands(commands_list, condition_check):
        nonlocal database
        for command in commands_list:
            command_reply = command.get("is_reply", "")
            if command_reply in [None, is_reply] and condition_check(command):
                if "func" in command and callable(command["func"]):
                    database = await command["func"](message, database)
                break

    await process_commands(
        COMMANDS["equal_text"], 
        lambda cmd: cmd.get("text", "") == message.text
    )

    await process_commands(
        COMMANDS["startswith_text"], 
        lambda cmd: message.text.startswith(cmd.get("text", ""))
    )

    return database

