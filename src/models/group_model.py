async def group_model(group_title: str, admins: list):
    return {
        "title": group_title,
        "admins": admins,
        "looks": {
            "Music": False,
            "Voice": False,
            "Video": False,
            "Gif": False,
            "Image": False,
        },
        "spam": {
            "spams": {},
            "msgs": 4,
            "max": 5,
            "ban": 300,
        },
        "learns": [],
        "events": [
            {
                "event_en_name": "JoinedGroupByLink",
                "event_fa_name": "ورود",
                "event_value": False,
            },
            {
                "event_en_name": "AddedGroupMembers",
                "event_fa_name": "افزودن کاربر",
                "event_value": False,
            },
            {
                "event_en_name": "LeaveGroup",
                "event_fa_name": "خروج",
                "event_value": False,
            },
            {
                "event_en_name": "RemoveGroupMembers",
                "event_fa_name": "حذف کاربر",
                "event_value": False,
            },
            {
                "event_en_name": "PinnedMessageUpdated",
                "event_fa_name": "سنجاق",
                "event_value": False,
            },
            {
                "event_en_name": "PhotoUpdate",
                "event_fa_name": "تغییر عکس",
                "event_value": False,
            },
            {
                "event_en_name": "RemovePhoto",
                "event_fa_name": "حذف عکس",
                "event_value": False,
            },
            {
                "event_en_name": "TitleUpdate",
                "event_fa_name": "تغییر تایتل",
                "event_value": False,
            },
            {
                "event_en_name": "CreateGroupVoiceChat",
                "event_fa_name": "ساخت ویسکال",
                "event_value": False,
            },
            {
                "event_en_name": "StopGroupVoiceChat",
                "event_fa_name": "قطع ویسکال",
                "event_value": False,
            },
        ],
    }
