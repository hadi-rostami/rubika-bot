import Client from "../../client";

async function addAddressBook(
  this: Client,
  phone: string,
  first_name: string,
  last_name: string = ""
) {
  return await this.builder("addAddressBook", { phone, first_name, last_name });
}

export default addAddressBook;
