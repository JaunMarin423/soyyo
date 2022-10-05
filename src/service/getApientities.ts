import axios from 'axios';
import { getApiUrl } from '../config/config';

export const getApiEntities = async(entityId: number) => {

    const apiUrl = getApiUrl(entityId)
    const result = await axios.get(apiUrl).then((res: { data: any; }) => res.data)
    return result
}