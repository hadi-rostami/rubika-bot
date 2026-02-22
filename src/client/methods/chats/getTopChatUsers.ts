import Client from '../../client';

async function  getTopChatUsers ( this: Client ) {
    return await this.builder('getTopChatUsers' , {});
};

export default getTopChatUsers;