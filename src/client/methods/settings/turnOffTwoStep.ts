import Client from "../../client";

async function  turnOffTwoStep ( this: Client  , password: string) {
    return await this.builder('turnOffTwoStep' , {password});
};

export default turnOffTwoStep;