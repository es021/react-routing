import axios from 'axios'

export const FETCH_USER = "FETCH_USER";
export function loadUser() {  
  return function(dispatch) {
    dispatch({
        type: FETCH_USER,
        payload: axios.get("https://jsonplaceholder.typicode.com/users")
    });
  };
}
