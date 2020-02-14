import http from "../../utils/http";
import {navigation} from "../../utils/endPoint";
import {NAVIGATION} from "./index";

export const getNavigations = (limit) => async dispatch=> {
    const res  = await http.post(navigation);
    dispatch({type: NAVIGATION, payload: res.data});
};
