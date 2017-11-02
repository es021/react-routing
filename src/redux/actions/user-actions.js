import axios from 'axios';
import {getAxiosGraphQLQuery} from './_helper-actions';

export const FETCH_USER = "FETCH_USER";

export function loadUser() {
    return function (dispatch) {
        dispatch({
            type: FETCH_USER,
            payload: getAxiosGraphQLQuery(axios
                    , `query{
                            users(role:"rec"){
                                first_name
                                last_name
                            }
                        }`)
        });
    };
}
