import { getApiEntities } from "../service/getApientities";

export const getEntitie = async (_startId: number) => {

  const entitie = await getApiEntities(_startId);
  
  return entitie
};
