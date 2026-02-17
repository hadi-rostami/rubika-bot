# مدل‌ها

## Enums

### ChatTypeEnum

| مقدار   | توضیح |
| ------- | ----- |
| User    | کاربر |
| Bot     | ربات  |
| Group   | گروه  |
| Channel | کانال |

### ForwardedFromEnum

| مقدار   | توضیح              |
| ------- | ------------------ |
| User    | ارسال شده از کاربر |
| Channel | ارسال شده از کانال |
| Bot     | ارسال شده از ربات  |

### PaymentStatusEnum

| مقدار   | توضیح       |
| ------- | ----------- |
| Paid    | پرداخت شده  |
| NotPaid | پرداخت نشده |

### PollStatusEnum

| مقدار  | توضیح |
| ------ | ----- |
| Open   | باز   |
| Closed | بسته  |

### LiveLocationStatusEnum

| مقدار   | توضیح     |
| ------- | --------- |
| Stopped | متوقف شده |
| Live    | فعال      |

### FileTypeEnum

| مقدار | توضیح  |
| ----- | ------ |
| File  | فایل   |
| Image | تصویر  |
| Voice | صدا    |
| Music | موسیقی |
| Gif   | گیف    |
| Video | ویدئو  |

### ButtonSelectionTypeEnum

| مقدار      | توضیح            |
| ---------- | ---------------- |
| TextOnly   | فقط متن          |
| TextImgThu | متن و تصویر کوچک |
| TextImgBig | متن و تصویر بزرگ |

### ButtonSelectionSearchEnum

| مقدار | توضیح       |
| ----- | ----------- |
| None  | ندارد       |
| Local | محلی        |
| Api   | از طریق API |

### ButtonSelectionGetEnum

| مقدار | توضیح       |
| ----- | ----------- |
| Local | محلی        |
| Api   | از طریق API |

### ButtonCalendarTypeEnum

| مقدار         | توضیح        |
| ------------- | ------------ |
| DatePersian   | تاریخ شمسی   |
| DateGregorian | تاریخ میلادی |

### ButtonTextboxTypeKeypadEnum

| مقدار  | توضیح |
| ------ | ----- |
| String | رشته  |
| Number | عدد   |

### ButtonTextboxTypeLineEnum

| مقدار      | توضیح   |
| ---------- | ------- |
| SingleLine | تک خطی  |
| MultiLine  | چند خطی |

### ButtonLocationTypeEnum

| مقدار  | توضیح    |
| ------ | -------- |
| Picker | انتخابگر |
| View   | نمایشی   |

### MessageSenderEnum

| مقدار | توضیح |
| ----- | ----- |
| User  | کاربر |
| Bot   | ربات  |

### UpdateTypeEnum

| مقدار          | توضیح                  |
| -------------- | ---------------------- |
| UpdatedMessage | پیام به‌روزرسانی شده   |
| NewMessage     | پیام جدید              |
| RemovedMessage | پیام حذف شده           |
| StartedBot     | ربات شروع شده          |
| StoppedBot     | ربات متوقف شده         |
| UpdatedPayment | پرداخت به‌روزرسانی شده |

### ChatKeypadTypeEnum

| مقدار  | توضیح |
| ------ | ----- |
| None   | ندارد |
| New    | جدید  |
| Remove | حذف   |

### UpdateEndpointTypeEnum

| مقدار                | توضیح                   |
| -------------------- | ----------------------- |
| ReceiveUpdate        | دریافت به‌روزرسانی      |
| ReceiveInlineMessage | دریافت پیام اینلاین     |
| ReceiveQuery         | دریافت پرسش             |
| GetSelectionItem     | دریافت آیتم انتخابی     |
| SearchSelectionItems | جستجوی آیتم‌های انتخابی |

### ButtonTypeEnum

| مقدار            | توضیح                 |
| ---------------- | --------------------- |
| Simple           | ساده                  |
| Selection        | انتخابی               |
| Calendar         | تقویمی                |
| NumberPicker     | انتخاب عدد            |
| StringPicker     | انتخاب رشته           |
| Location         | مکان                  |
| Payment          | پرداخت                |
| CameraImage      | تصویر دوربین          |
| CameraVideo      | ویدئوی دوربین         |
| GalleryImage     | تصویر گالری           |
| GalleryVideo     | ویدئوی گالری          |
| File             | فایل                  |
| Audio            | صوت                   |
| RecordAudio      | ضبط صوت               |
| MyPhoneNumber    | شماره تلفن من         |
| MyLocation       | مکان من               |
| Textbox          | جعبه متن              |
| Link             | لینک                  |
| AskMyPhoneNumber | درخواست شماره تلفن من |
| AskLocation      | درخواست مکان          |
| Barcode          | بارکد                 |

## Interfaces

### Chat

| فیلد       | نوع                                             | توضیح        |
| ---------- | ----------------------------------------------- | ------------ |
| chat_id    | `string`                                        | شناسه چت     |
| chat_type  | [ChatTypeEnum](/docs/robot/models#chattypeenum) | نوع چت       |
| user_id    | `string`                                        | شناسه کاربر  |
| first_name | `string`                                        | نام کوچک     |
| last_name  | `string`                                        | نام خانوادگی |
| title      | `string`                                        | عنوان چت     |
| username   | `string`                                        | نام کاربری   |

### File

| فیلد      | نوع      | توضیح       |
| --------- | -------- | ----------- |
| file_id   | `string` | شناسه فایل  |
| file_name | `string` | نام فایل    |
| size      | `string` | اندازه فایل |

### ForwardedFrom

| فیلد           | نوع                                                       | توضیح            |
| -------------- | --------------------------------------------------------- | ---------------- |
| type_from      | [ForwardedFromEnum](/docs/robot/models#forwardedfromenum) | نوع فرستنده اصلی |
| message_id     | `string`                                                  | شناسه پیام اصلی  |
| from_chat_id   | `string`                                                  | شناسه چت فرستنده |
| from_sender_id | `string`                                                  | شناسه فرستنده    |

### PaymentStatus

| فیلد       | نوع                                                       | توضیح        |
| ---------- | --------------------------------------------------------- | ------------ |
| payment_id | `string`                                                  | شناسه پرداخت |
| status     | [PaymentStatusEnum](/docs/robot/models#paymentstatusenum) | وضعیت پرداخت |

### MessageTextUpdate

| فیلد       | نوع      | توضیح      |
| ---------- | -------- | ---------- |
| message_id | `string` | شناسه پیام |
| text       | `string` | متن پیام   |

### Bot

| فیلد          | نوع                             | توضیح             |
| ------------- | ------------------------------- | ----------------- |
| bot_id        | `string`                        | شناسه ربات        |
| bot_title     | `string`                        | عنوان ربات        |
| avatar        | [File](/docs/robot/models#file) | آواتار ربات       |
| description   | `string`                        | توضیحات ربات      |
| username      | `string`                        | نام کاربری ربات   |
| start_message | `string`                        | پیام شروع ربات    |
| share_url     | `string`                        | لینک اشتراک گذاری |

### BotCommand

| فیلد        | نوع      | توضیح         |
| ----------- | -------- | ------------- |
| command     | `string` | دستور ربات    |
| description | `string` | توضیحات دستور |

### Sticker

| فیلد            | نوع                             | توضیح        |
| --------------- | ------------------------------- | ------------ |
| sticker_id      | `string`                        | شناسه استیکر |
| file            | [File](/docs/robot/models#file) | فایل استیکر  |
| emoji_character | `string`                        | ایموجی مرتبط |

### ContactMessage

| فیلد         | نوع      | توضیح        |
| ------------ | -------- | ------------ |
| phone_number | `string` | شماره تلفن   |
| first_name   | `string` | نام کوچک     |
| last_name    | `string` | نام خانوادگی |

### PollStatus

| فیلد                 | نوع                                                 | توضیح                  |
| -------------------- | --------------------------------------------------- | ---------------------- |
| state                | [PollStatusEnum](/docs/robot/models#pollstatusenum) | وضعیت نظرسنجی          |
| selection_index      | `number`                                            | ایندکس انتخاب شده      |
| percent_vote_options | `number[]`                                          | درصد آرا برای گزینه‌ها |
| total_vote           | `number`                                            | مجموع آرا              |
| show_total_votes     | `boolean`                                           | نمایش مجموع آرا        |

### Poll

| فیلد        | نوع                                         | توضیح             |
| ----------- | ------------------------------------------- | ----------------- |
| question    | `string`                                    | سوال نظرسنجی      |
| options     | `string[]`                                  | گزینه‌های نظرسنجی |
| poll_status | [PollStatus](/docs/robot/models#pollstatus) | وضعیت نظرسنجی     |

### Location

| فیلد      | نوع      | توضیح         |
| --------- | -------- | ------------- |
| longitude | `string` | طول جغرافیایی |
| latitude  | `string` | عرض جغرافیایی |

### LiveLocation

| فیلد             | نوع                                                                 | توضیح                  |
| ---------------- | ------------------------------------------------------------------- | ---------------------- |
| start_time       | `string`                                                            | زمان شروع              |
| live_period      | `number`                                                            | مدت زمان زنده بودن     |
| current_location | [Location](/docs/robot/models#location)                             | موقعیت فعلی            |
| user_id          | `string`                                                            | شناسه کاربر            |
| status           | [LiveLocationStatusEnum](/docs/robot/models#livelocationstatusenum) | وضعیت مکان زنده        |
| last_update_time | `string`                                                            | زمان آخرین به‌روزرسانی |

### ButtonSelectionItem

| فیلد      | نوع                                                                   | توضیح      |
| --------- | --------------------------------------------------------------------- | ---------- |
| text      | `string`                                                              | متن دکمه   |
| image_url | `string`                                                              | لینک تصویر |
| type      | [ButtonSelectionTypeEnum](/docs/robot/models#buttonselectiontypeenum) | نوع دکمه   |

### ButtonSelection

| فیلد               | نوع                                                             | توضیح           |
| ------------------ | --------------------------------------------------------------- | --------------- |
| selection_id       | `string`                                                        | شناسه انتخاب    |
| search_type        | `string`                                                        | نوع جستجو       |
| get_type           | `string`                                                        | نوع دریافت      |
| items              | [[]ButtonSelectionItem](/docs/robot/models#buttonselectionitem) | آیتم‌های انتخاب |
| is_multi_selection | `boolean`                                                       | انتخاب چندگانه  |
| columns_count      | `string`                                                        | تعداد ستون‌ها   |
| title              | `string`                                                        | عنوان           |

### ButtonCalendar

| فیلد           | نوع                                                                 | توضیح         |
| -------------- | ------------------------------------------------------------------- | ------------- |
| default_value? | `string` _(اختیاری)_                                                | مقدار پیش‌فرض |
| type           | [ButtonCalendarTypeEnum](/docs/robot/models#buttoncalendartypeenum) | نوع تقویم     |
| min_year       | `string`                                                            | حداقل سال     |
| max_year       | `string`                                                            | حداکثر سال    |
| title          | `string`                                                            | عنوان         |

### ButtonNumberPicker

| فیلد           | نوع                  | توضیح         |
| -------------- | -------------------- | ------------- |
| min_value      | `string`             | حداقل مقدار   |
| max_value      | `string`             | حداکثر مقدار  |
| default_value? | `string` _(اختیاری)_ | مقدار پیش‌فرض |
| title          | `string`             | عنوان         |

### ButtonStringPicker

| فیلد           | نوع                  | توضیح         |
| -------------- | -------------------- | ------------- |
| items          | `string[]`           | آیتم‌ها       |
| default_value? | `string` _(اختیاری)_ | مقدار پیش‌فرض |
| title?         | `string` _(اختیاری)_ | عنوان         |

### ButtonTextbox

| فیلد           | نوع                                                                           | توضیح         |
| -------------- | ----------------------------------------------------------------------------- | ------------- |
| type_line      | [ButtonTextboxTypeLineEnum](/docs/robot/models#buttontextboxtypelineenum)     | نوع خط        |
| type_keypad    | [ButtonTextboxTypeKeypadEnum](/docs/robot/models#buttontextboxtypekeypadenum) | نوع کیبورد    |
| place_holder?  | `string` _(اختیاری)_                                                          | متن راهنما    |
| title?         | `string` _(اختیاری)_                                                          | عنوان         |
| default_value? | `string` _(اختیاری)_                                                          | مقدار پیش‌فرض |

### ButtonLocation

| فیلد                     | نوع                                                                 | توضیح                 |
| ------------------------ | ------------------------------------------------------------------- | --------------------- |
| default_pointer_location | [Location](/docs/robot/models#location)                             | مکان پیش‌فرض اشاره‌گر |
| default_map_location     | [Location](/docs/robot/models#location)                             | مکان پیش‌فرض نقشه     |
| type                     | [ButtonLocationTypeEnum](/docs/robot/models#buttonlocationtypeenum) | نوع مکان              |
| title?                   | `string` _(اختیاری)_                                                | عنوان                 |
| location_image_url       | `string`                                                            | URL تصویر مکان        |

### AuxData

| فیلد      | نوع      | توضیح      |
| --------- | -------- | ---------- |
| start_id  | `string` | شناسه شروع |
| button_id | `string` | شناسه دکمه |

### Button

| فیلد                  | نوع                                                                     | توضیح                 |
| --------------------- | ----------------------------------------------------------------------- | --------------------- |
| id                    | `string`                                                                | شناسه دکمه            |
| type                  | [ButtonTypeEnum](/docs/robot/models#buttontypeenum)                     | نوع دکمه              |
| button_text           | `string`                                                                | متن دکمه              |
| button_selection?     | [ButtonSelection](/docs/robot/models#buttonselection) _(اختیاری)_       | تنظیمات انتخاب دکمه   |
| button_calendar?      | [ButtonCalendar](/docs/robot/models#buttoncalendar) _(اختیاری)_         | تنظیمات تقویم دکمه    |
| button_number_picker? | [ButtonNumberPicker](/docs/robot/models#buttonnumberpicker) _(اختیاری)_ | تنظیمات عددی دکمه     |
| button_string_picker? | [ButtonStringPicker](/docs/robot/models#buttonstringpicker) _(اختیاری)_ | تنظیمات رشته‌ای دکمه  |
| button_location?      | [ButtonLocation](/docs/robot/models#buttonlocation) _(اختیاری)_         | تنظیمات مکان دکمه     |
| button_textbox?       | [ButtonTextbox](/docs/robot/models#buttontextbox) _(اختیاری)_           | تنظیمات جعبه متن دکمه |

### KeypadRow

| فیلد    | نوع                                   | توضیح                |
| ------- | ------------------------------------- | -------------------- |
| buttons | [[]Button](/docs/robot/models#button) | دکمه‌های ردیف کیبورد |

### Keypad

| فیلد              | نوع                                         | توضیح               |
| ----------------- | ------------------------------------------- | ------------------- |
| rows              | [[]KeypadRow](/docs/robot/models#keypadrow) | ردیف‌های کیبورد     |
| resize_keyboard?  | `boolean` _(اختیاری)_                       | تغییر اندازه کیبورد |
| on_time_keyboard? | `boolean` _(اختیاری)_                       | کیبورد یک‌بار مصرف  |

### InlineKeypad

| فیلد | نوع                                         | توضیح                   |
| ---- | ------------------------------------------- | ----------------------- |
| rows | [[]KeypadRow](/docs/robot/models#keypadrow) | ردیف‌های کیبورد اینلاین |

### MessageKeypadUpdate

| فیلد          | نوع                                 | توضیح               |
| ------------- | ----------------------------------- | ------------------- |
| message_id    | `string`                            | شناسه پیام          |
| inline_keypad | [Keypad](/docs/robot/models#keypad) | کیبورد اینلاین پیام |

### Message

| فیلد                 | نوع                                                             | توضیح                       |
| -------------------- | --------------------------------------------------------------- | --------------------------- |
| message_id           | `string`                                                        | شناسه پیام                  |
| text?                | `string` _(اختیاری)_                                            | متن پیام                    |
| time                 | `number`                                                        | زمان ارسال پیام (timestamp) |
| is_edited            | `boolean`                                                       | آیا پیام ویرایش شده است؟    |
| sender_type          | [MessageSenderEnum](/docs/robot/models#messagesenderenum)       | نوع ارسال‌کننده             |
| sender_id            | `string`                                                        | شناسه ارسال‌کننده           |
| aux_data?            | [AuxData](/docs/robot/models#auxdata) _(اختیاری)_               | داده‌های کمکی               |
| file?                | [File](/docs/robot/models#file) _(اختیاری)_                     | فایل پیوست                  |
| reply_to_message_id? | `string` _(اختیاری)_                                            | پاسخ به پیام دیگر           |
| forwarded_from?      | [ForwardedFrom](/docs/robot/models#forwardedfrom) _(اختیاری)_   | اطلاعات پیام فوروارد شده    |
| forwarded_no_link?   | `string` _(اختیاری)_                                            | فوروارد بدون لینک           |
| location?            | [Location](/docs/robot/models#location) _(اختیاری)_             | موقعیت جغرافیایی            |
| sticker?             | [Sticker](/docs/robot/models#sticker) _(اختیاری)_               | استیکر                      |
| contact_message?     | [ContactMessage](/docs/robot/models#contactmessage) _(اختیاری)_ | پیام مخاطب                  |
| poll?                | [Poll](/docs/robot/models#poll) _(اختیاری)_                     | نظرسنجی                     |
| live_location?       | [LiveLocation](/docs/robot/models#livelocation) _(اختیاری)_     | موقعیت زنده                 |

### Update

| فیلد                | نوع                                                           | توضیح                  |
| ------------------- | ------------------------------------------------------------- | ---------------------- |
| type                | [UpdateTypeEnum](/docs/robot/models#updatetypeenum)           | نوع به‌روزرسانی        |
| chat_id             | `string`                                                      | شناسه چت               |
| removed_message_id? | `string` _(اختیاری)_                                          | شناسه پیام حذف شده     |
| new_message?        | [Message](/docs/robot/models#message) _(اختیاری)_             | پیام جدید              |
| updated_message?    | [Message](/docs/robot/models#message) _(اختیاری)_             | پیام به‌روزرسانی شده   |
| updated_payment?    | [PaymentStatus](/docs/robot/models#paymentstatus) _(اختیاری)_ | پرداخت به‌روزرسانی شده |

### InlineMessage

| فیلد       | نوع                                                 | توضیح            |
| ---------- | --------------------------------------------------- | ---------------- |
| sender_id  | `string`                                            | شناسه فرستنده    |
| text       | `string`                                            | متن پیام         |
| file?      | [File](/docs/robot/models#file) _(اختیاری)_         | فایل پیوست       |
| location?  | [Location](/docs/robot/models#location) _(اختیاری)_ | موقعیت جغرافیایی |
| aux_data?  | [AuxData](/docs/robot/models#auxdata) _(اختیاری)_   | داده‌های کمکی    |
| message_id | `string`                                            | شناسه پیام       |
| chat_id    | `string`                                            |

      <!-- export interface Commend {
    command: string;
    description: string;

} -->
| شناسه چت |

### Commend

| فیلد        | نوع      | توضیح        |
| ----------- | -------- | ------------ |
| command     | `string` | متن کامند    |
| description | `string` | درباره کامند |
