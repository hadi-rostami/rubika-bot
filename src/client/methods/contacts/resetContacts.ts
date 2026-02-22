import Client from "../../client";

async function  resetContacts ( this: Client ) {
    return await this.builder('resetContacts' , {});
};

export default resetContacts;