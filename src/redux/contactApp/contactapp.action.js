import Axios from 'axios';
export const FETCH_CONTACTS_REQUEST = 'FETCH_CONTACTS_REQUEST';
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
export const FETCH_CONTACTS_FAILURE = 'FETCH_CONTACTS_FAILURE';
export const SELECTED_USER = 'SELECTED_USER';

export const fetchContactsInfo = () =>{
    return async (dispatch) => {
        dispatch({type: FETCH_CONTACTS_REQUEST});
        try {
            let datUrl = 'https://gist.githubusercontent.com/PriyankaKatre/df3ccb7ed7d7cf4bd2953f3f7b0f518e/raw/4cad9c2786458b904d31a45a13016b6d95e91e42/employees.21-20-2020.json';
            let response = await Axios.get(datUrl);
            dispatch({type: FETCH_CONTACTS_SUCCESS, payload:response.data});
        } catch(error) {
            dispatch({type: FETCH_CONTACTS_FAILURE, payload:error});
        }
    }
};

export const selectedUserInfo = (selectedContact) => {
    return {
        type: SELECTED_USER,
        payload: selectedContact
    }
};
