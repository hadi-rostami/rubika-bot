from filelock import FileLock
import json, aiofiles


async def write_database_async(
    data,
    file_path="./src/database/database.json",
):
    lock = FileLock(f"{file_path}.lock")

    with lock:
        async with aiofiles.open(file_path, "w", encoding="utf-8") as f:
            await f.write(json.dumps(data, ensure_ascii=False, indent=4))


async def read_database_async(file_path="./src/database/database.json"):
    lock = FileLock(f"{file_path}.lock")

    with lock:
        async with aiofiles.open(file_path, "r", encoding="utf-8") as f:
            content = await f.read()
            data = json.loads(content)
        return data
