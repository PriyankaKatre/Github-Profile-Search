import * as contactAppAction from './contactapp.action';
export const contactAppFeatureKey = 'contactApp';

let initialstate = {
    loading: false,
    contacts: [],
    selectedContact: {},
    error:''
};

export const reducer = (state= initialstate, action) => {
    switch(action.type){
        case contactAppAction.FETCH_CONTACTS_REQUEST :
            return {
                ...state,
                loading: true
            };
        case contactAppAction.FETCH_CONTACTS_SUCCESS :
            return {
                ...state,
                loading: false,
                contacts: action.payload
            };
        case contactAppAction.FETCH_CONTACTS_FAILURE :
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case contactAppAction.SELECTED_USER :
            return {
                ...state,
                loading: false,
                selectedContact: action.payload
            };
        default: return state;
    }
};
