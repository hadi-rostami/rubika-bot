from rubpy import Client, Message, handlers, models
from asyncio import run, create_task, sleep as sleep_async
from time import time
import sqlite3
import random
import aiohttp


conn = sqlite3.connect("digi_detabase.db")
cursor = conn.cursor()

data = {
    "filters": ['@', "https://"],
    "revilement": [
        "دولی",
        "کصکش",
        "کون",
        "کص",
        "کیر",
        "دول",
        "کسکش",
        "کوبص",
        "حرومزاده",
        "دتجیم",
        "دجیم",
        "حرامزاده",
        "لو بم",
        "لی بم",
    ],
    "EVENTS": {
        "JoinedGroupByLink": {
            "text": "سلام دوست عزیز خوش اومدین به گپمون💓"
        },
        "LeaveGroup": {
            "text": "پشت سرت درم ببند👋"
        }
    },
    "gruops": [],
    "access_bot": ['ChangeInfo', 'PinMessages', 'DeleteGlobalAllMessages', 'BanMember', 'SetAdmin', 'SetJoinLink', 'SetMemberAccess', 'ViewMembers', 'ViewAdmins', 'SendMessages', 'AddMember', 'ViewInfo', 'ViewMessages', 'DeleteLocalMessages', 'EditMyMessages', 'DeleteGlobalMyMessages'],
    "creators": [""],
    "urls": [
        "https://api.codebazan.ir/font/?type=fa&text=",
        "https://api.codebazan.ir/font/?text=",
    ],
    # spam vareabels
    "spams": {},
    "msgs": 4,
    "max": 5,
    "ban": 300,
}


class handler():
    def __init__(self, message: Message, client: Client) -> None:
        self.client = client
        self.message = message
        self.message_id = message.message_id
        self.message_text = message.raw_text
        self.object_guid = message.object_guid
        self.admin_message = self.check_message_admins(
            self.message.author_guid)

    async def hadler(self):
        # گفتگویی ربات
        create_task(self.speak_bot(self.client, self.message_text,
                                   self.object_guid, self.message_id))

        # ضد اسپم
        create_task(self.is_spam())

        # حذف فرواردی ها
        if 'forwarded_from' in self.message.message.to_dict().keys():
            create_task(self.delete_message([self.message_id], 0))

        # لینک پاک کن
        elif not self.admin_message and self.get_ads(self.message_text):
            create_task(self.delete_message([self.message_id], 0))

        # حذف فش
        elif self.get_instans(self.message_text):
            create_task(self.delete_message([self.message_id], 0))

        # رپلای روی ایونت ها
        elif self.message.message.type == "Event":
            event_req = self.handler_event(self.message.message.event_data)
            message = await self.client.send_message(
                self.object_guid, event_req['text'], self.message_id)
            create_task(self.delete_message(
                [self.message.message_id, message.message_update.message_id], 10))

        # جرعت حقیقت
        elif self.message_text == "ج ح" and self.message.reply_message_id:
            create_task(self.client.send_message(self.object_guid,
                        self.get_jorhat_hagigat(), self.message.reply_message_id))

        # ارسال بیوگرافی
        elif self.message_text == "بیو":
            create_task(self.send_data(
                self.client,
                "https://api.codebazan.ir/bio/",
                self.message_id,
            ))

        # ارسال جوک
        elif self.message_text == "جوک":
            create_task(self.send_data(
                self.client,
                "https://api.codebazan.ir/jok/",
                self.message_id,
            ))

        elif self.message_text.startswith("فونت"):
            name = self.message_text.split("فونت")[-1].strip()
            if not self.get_instans(name):
                create_task(self.send_font(name))

        # خاموش کردن ربات
        elif self.message.author_guid in data['creators'] and self.message_text == "خاموش کردن":
            cursor.execute(f"DROP TABLE IF EXISTS `{self.object_guid}`")
            conn.commit()
            data['gruops'].remove(self.object_guid)
            create_task(self.client.send_message(
                self.object_guid, "🤖 ربات غیر فعال شد."))
        else:
            if self.admin_message:
                if self.message.reply_message_id != None:
                    # حذف کاربر از گروه
                    if self.message_text == "بن":
                        try:
                            create_task(self.client.ban_group_member(self.object_guid,
                                                                     await self.get_guid_bymessageID(self.message.reply_message_id)))
                        except:
                            create_task(self.client.send_message(
                                self.object_guid, "ربات توانایی حذف شخص را ندارد"))
                    # اموش دادن به ربات
                    elif self.message_text.startswith("یادبگیر بگو"):
                        create_task(self.learning_bot(
                            self.client, self.object_guid, self.message_text, self.message.reply_message_id))

                # حذف کاربر از گروه
                if self.message_text.startswith("بن"):
                    username = self.message_text.split("بن")[-1].strip()
                    if username != "":
                        user_guid = await self.get_guid_by_username(username)
                        if user_guid:
                            try:
                                create_task(self.client.ban_group_member(
                                    self.object_guid, user_guid))
                            except:
                                create_task(self.client.send_message(
                                    self.object_guid, "ربات توانایی حذف شخص را ندارد"))

                # اپدیت لیست مدیران برا ربات
                elif self.message_text == "اپدیت مدیران":
                    create_task(updata_admins(self.client, self.object_guid))
                    create_task(self.client.send_message(
                        self.object_guid, "✅ لیست مدیران گروه برای ربات اپدیت شد.", self.message_id))

    # دریافت پیام ایونت

    def handler_event(self, event_data: object) -> str:
        if event_data.type in data['EVENTS']:
            return data["EVENTS"][event_data.type]

    # برسی لینک بودن پیام کاربر
    def get_ads(self, text: str) -> bool:
        for filter in data['filters']:
            if filter in text:
                return True
        return False

    # برسی فش بودن پیام کاربر
    def get_instans(self, text: str) -> bool:
        for ins in data['revilement']:
            if ins in text:
                return True
        return False

    # دریافت جرعت حقیقت
    def get_jorhat_hagigat(self) -> str:
        result = cursor.execute("SELECT * FROM jorhat_hagigat").fetchall()
        result = random.choice(result)
        return result[0]

    # حذف پیام های ربات

    async def delete_message(
        self, reply_ids: list, time: int
    ):
        await sleep_async(time)
        await self.client.delete_messages(self.object_guid, reply_ids)

    async def get_guid_by_username(self, username: str):
        user_info = await self.client.get_object_by_username(username)
        if user_info.exist == True:
            return user_info["user"]["user_guid"]
        else:
            await self.client.send_message(self.object_guid, "• شناسه نادرست است !", self.message_id)

    # انتی اسپم

    async def is_spam(self):
        try:
            usr = data["spams"][self.message.author_guid]
            usr["messages"] += 1
        except:
            data["spams"][self.message.author_guid] = {
                "next_time": int(time()) + data['max'],
                "messages": 1,
                "banned": 0,
            }
            usr = data["spams"][self.message.author_guid]

        if usr["banned"] >= int(time()):
            return True
        else:
            if usr["next_time"] >= int(time()):
                if usr["messages"] >= data["msgs"]:
                    data["spams"][self.message.author_guid]["banned"] = time() + \
                        data["ban"]
                    await self.client.ban_group_member(self.object_guid, self.message.author_guid)
            else:
                data["spams"][self.message.author_guid]["messages"] = 1
                data["spams"][self.message.author_guid]["next_time"] = int(
                    time()) + data['max']

    # ارسال فونت
    async def send_font(self, name: str):
        async with aiohttp.ClientSession() as session:
            text = ""
            for url in data["urls"]:
                async with session.get(url + name) as response:
                    response = await response.json()
                    if "ok" in response.keys():
                        if response["ok"]:
                            result = list(response["result"].keys())
                            for i in range(10):
                                text = f"{text}{i+1} - {response['result'][f'{random.choice(result)}']}\n"
                    else:
                        result = list(response["Result"].values())
                        index = 1
                        for i in result:
                            text = f"{text}{index} - {i}\n"
                            index += 1
        await self.client.send_message(self.object_guid, text, self.message_id)

    # ارسال بیو و جوک
    async def send_data(self, client: Client, url: str, message_id: str):
        async with aiohttp.ClientSession() as session:
            async with session.get(url) as response:
                await client.send_message(self.object_guid, await response.text(), message_id)

    # گرفتن گوید با ایدی پیام
    async def get_guid_bymessageID(self, message_id: str):
        message = await self.client.get_messages_by_ID(
            self.object_guid, [message_id])
        return message.messages[0].author_object_guid

    # حرف زدن ربات
    async def speak_bot(self, client: Client, text: str, object_guid: str, message_id: str):
        results = cursor.execute(
            f"SELECT `pasokh` FROM `learn_bot` WHERE javab='{text}'").fetchall()
        if results != []:
            await client.send_message(object_guid, random.choice(results)[0], message_id)

    # یاد دادن به ربات
    async def learn_bot(self, javab: str, pasokh: str):
        cursor.execute(
            "INSERT INTO `learn_bot` ( `javab` , `pasokh`) VALUES (?, ?)", (javab, pasokh))

        conn.commit()
        return True

    # یادگیری ربات
    async def learning_bot(self, client: Client, object_guid: str, message_text: str, message_id: str):
        message = await client.get_messages_by_ID(object_guid, [message_id])
        if await self.learn_bot(message.messages[0].text, message_text.split("یادبگیر بگو")[-1].strip()):
            await client.send_message(object_guid, "یادگرفتم", message_id)

    #
    def get_list_admins(self):
        cursor.execute(f"SELECT * FROM `{self.object_guid}`")
        rows = cursor.fetchall()
        if rows != []:
            return rows

    def check_message_admins(self, guid: str):
        rows = self.get_list_admins()
        if rows != None:
            for row in rows:
                if row[0] == guid:
                    return True
        return False  # سازنده @HadiRostamiYT


# اپدیت کردن ادمین ها
async def updata_admins(client: Client, object_guid: str):
    cursor.execute(f"DELETE FROM `{object_guid}`")
    conn.commit()
    results = await client.get_group_admin_members(object_guid)
    results = results.to_dict()["in_chat_members"]
    for result in results:
        await append_list_upgrade(result["member_guid"], object_guid)

# اظافه کردن ادمین به جدول ادمین ها


async def append_list_upgrade(guid_admin: str, object_guid: str):
    cursor.execute(
        f"INSERT INTO `{object_guid}` (guid) VALUES ('{guid_admin}')"
    )
    conn.commit()

# برسی ادمین بودن ربات
async def check_adminBot(client: Client, object_guid: str):
    group_info = await client.get_group_info(object_guid)
    if group_info.chat.access == data['access_bot']:
        cursor.execute(
            f"CREATE TABLE IF NOT EXISTS '{object_guid}' (guid TEXT)")
        conn.commit()
        await updata_admins(client, object_guid)
        return True
    return False


# ارسال لینک خودکار
async def auto_link(client: Client):
    while True:
        await sleep_async(12 * 60 * 60)
        if data['gruops'] != []:
            for gap in data['gruops']:
                await client.send_message(gap, """🔊 سازنده 
 @HadiRostamiYT""")
                if not await check_adminBot(client, gap):
                    create_task(client.send_message(
                        gap, "❌ ربات دسترسی کامل برای فعال شدن ندارد و خاموش شد.\n\n جهت فعال سازی دوباره ربات با سازنده ربات در ارتباط باشید! \n @HadiRostamiYT"))
                    data["gruops"].remove(gap)
                else:
                    group_info = await client.get_group_info(gap)
                    if not group_info.group.event_messages:
                        create_task(client.send_message(
                            gap, "❌ ربات دسترسی کامل برای فعال شدن ندارد و خاموش شد.\n\n جهت فعال سازی دوباره ربات با سازنده ربات در ارتباط باشید!  \n @HadiRostamiYT"))
                        data["gruops"].remove(gap)


def get_starts_bot(guid: str) -> bool:
    result = cursor.execute(
        f"SELECT * FROM starts_bot WHERE guid='{guid}'").fetchone()
    if result != None:
        return True
    return False


def set_starts_bot(guid: str) -> bool:
    cursor.execute(
        f"INSERT INTO starts_bot (guid) VALUES ('{guid}')")
    conn.commit()


async def main():
    async with Client("digi_bot") as client:
        create_task(auto_link(client))

        @client.on(handlers.MessageUpdates(models.is_group))
        async def updates(message: Message):
            if message.raw_text != None:
                if message.object_guid in data['gruops']:
                    # هندلر اصلی ربات
                    handl = handler(message, client)
                    await handl.hadler()

                # فعال سازی ربات
                elif message.author_guid in data['creators'] and message.raw_text == "فعال سازی":
                    if await check_adminBot(client, message.object_guid):
                        data['gruops'].append(message.object_guid)
                        create_task(client.send_message(
                            message.object_guid, "🤖 ربات با موفقیت فعال شد."))
                    else:
                        create_task(client.send_message(
                            message.object_guid, "❌ ربات دسترسی کامل برای فعال شدن ندارد."))

        @client.on(handlers.MessageUpdates(models.is_private))  # سازنده @HadiRostamiYT
        async def updates(message: Message):
            if not get_starts_bot(message.author_guid):
                create_task(client.send_message(
                    message.author_guid, """🔊 سازنده: @HadiRostamiYT"""))
                set_starts_bot(message.author_guid)
        await client.run_until_disconnected()

run(main())
