import { IRequest, IResponse } from "../models";
import { API_GAS } from "../config";

export const callToGoogleAppsScriptAPI: (request: IRequest) => Promise<IResponse | any> = async (request: IRequest) => {
    return await API_GAS.post('', request, {
        withCredentials: false
    }).then(response => {
        return response.data;
    }).catch(error => {
        return error
    });
}
