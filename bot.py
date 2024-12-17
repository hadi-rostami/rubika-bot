from rubpy import Client, handlers, filters
from src.handlers.main_handler import main_handler

bot = Client("my_bot")


bot.add_handler(main_handler, handlers.MessageUpdates(filters.is_group))

bot.run()
