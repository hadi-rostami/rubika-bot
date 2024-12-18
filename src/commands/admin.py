from ..methods.admin import (
    update_admins,
    update_event,
    status_events,
    learned_bot,
    list_conversations,
    delete_learned_bot,
    update_looks,
    get_status_look,
)

COMMANDS = {
    "startswith_text": [
        {"text": "اپدیت ایونت", "func": update_event, "is_reply": True},
        {"text": "یادبگیر", "func": learned_bot, "is_reply": True},
        {"text": "حذف یادگیری", "func": delete_learned_bot, "is_reply": None},
        {"text": "قفل", "func": update_looks, "is_reply": None},
        {"text": "بازکردن", "func": update_looks, "is_reply": None},
    ],
    "equal_text": [
        {"text": "اپدیت مدیران", "func": update_admins, "is_reply": None},
        {"text": "وضعیت ایونت ها", "func": status_events, "is_reply": None},
        {"text": "وضعیت قفل ها", "func": get_status_look, "is_reply": None},
        {"text": "لیست یادگیری", "func": list_conversations, "is_reply": None},
    ],
}
