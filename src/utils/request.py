from aiohttp import ClientSession


async def requset(method: str, url: str):
    async with ClientSession() as session:
        async with session.request(method, url) as response:
            return await response.text()
