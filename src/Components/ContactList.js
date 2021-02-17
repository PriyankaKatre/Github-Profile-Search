import React, {useEffect}  from 'react';
import * as contactListAction from '../redux/contactApp/contactapp.action';
import * as contactListReducer from '../redux/contactApp/contactapp.reducer';
import {useDispatch, useSelector} from "react-redux";

let ContactList = () => {
    let dispatch = useDispatch();
    let contactsInfo = useSelector((state)=>{
        return state[contactListReducer.contactAppFeatureKey];
    });

    let {loading, contacts, error} = contactsInfo;

    useEffect(()=>{
        dispatch(contactListAction.fetchContactsInfo())
    },[]);

    let dispatchUserContact =  (contact) => {
        dispatch(contactListAction.selectedUserInfo(contact))
    };
    return (
        <React.Fragment>
            <h3>Contact List</h3>
            <table className='table table-hover table-primary table-striped text-center'>
                <thead className='bg-dark text-white'>
                    <tr>
                        <td>SNO</td>
                        <td>NAME</td>
                        <td>EMAIL</td>
                        <td>PHONE</td>
                        <td>STREET</td></tr>
                </thead>
                <tbody>
                {
                    contacts.length > 0 ?
                        <React.Fragment>
                            {
                                contacts.map(contact =>{
                                    return (
                                        <tr key={contact.login.uuid} onClick={dispatchUserContact.bind(this, contact)}>
                                            <td>{contact.login.uuid.substr(contact.login.uuid.length-4)}</td>
                                            <td>{contact.name.first} {contact.name.last}</td>
                                            <td>{contact.email}</td>
                                            <td>{contact.phone}</td>
                                            <td>{contact.location.street.name}</td>
                                        </tr>
                                    )
                                })
                            }
                        </React.Fragment>:null
                }
                </tbody>
            </table>
        </React.Fragment>
    )
};

export default ContactList;
