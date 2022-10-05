import { getEntitie } from "../../core/core";

export const soyYoEntity = async ( _startId: number, _endId: number ) => {
    const variable = await getEntitie(_startId);

    const response = variable.data;
    let {attributeValidator, ipAddress, domain, ...rest} = response;
    let entity = [];

    entity.push( rest )
 
    return {
        entity
    }
};
