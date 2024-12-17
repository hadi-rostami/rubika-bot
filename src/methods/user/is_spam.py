import time
from rubpy.types import Update as Message


async def is_spam(message: Message, spam_data: dict):
    try:
        usr = spam_data["spams"][message.author_guid]
        usr["messages"] += 1
    except:
        spam_data["spams"][message.author_guid] = {
            "next_time": int(time.time()) + spam_data["max"],
            "messages": 1,
            "banned": 0,
        }
        usr = spam_data["spams"][message.author_guid]

    if usr["banned"] >= int(time.time()):
        return spam_data
    else:
        if usr["next_time"] >= int(time.time()):
            if usr["messages"] >= spam_data["msgs"]:
                spam_data["spams"][message.author_guid]["banned"] = (
                    time.time() + spam_data["ban"]
                )
                await message.client.ban_member(
                    message.object_guid, message.author_guid
                )
        else:
            spam_data["spams"][message.author_guid]["messages"] = 1
            spam_data["spams"][message.author_guid]["next_time"] = (
                int(time.time()) + spam_data["max"]
            )

    return spam_data
