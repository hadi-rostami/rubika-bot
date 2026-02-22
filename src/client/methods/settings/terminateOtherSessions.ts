import Client from "../../client";

async function  terminateOtherSessions ( this: Client ) {
    return await this.builder('terminateOtherSessions' , {});
};

export default terminateOtherSessions;