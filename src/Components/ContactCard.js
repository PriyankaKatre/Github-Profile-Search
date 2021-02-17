import React from 'react';
import * as contactAction from '../redux/contactApp/contactapp.action';
import * as contactReducer from '../redux/contactApp/contactapp.reducer';
import {useDispatch, useSelector} from "react-redux";


let ContactCard = () => {
    let contactInfo = useSelector((state) => {
        return state[contactReducer.contactAppFeatureKey];
    });
    let {selectedContact} = contactInfo;
    return (

        <React.Fragment>
            {
                Object.keys(selectedContact).length !== 0 ?
                    <React.Fragment>
                        <div className="card sticky-top">
                            <div className="card-header bg-primary">
                                <div className="p-4"/>
                            </div>
                            <div className="card-body text-center">
                                <img src={selectedContact.picture.large} className="img-fluid img-thumbnail rounded-circle w-50 contact-img"/>
                                <ul className="list-group text-left mt-3">
                                    <li className="list-group-item list-group-item-primary">
                                        NAME : {selectedContact.name.first} {selectedContact.name.last}
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        AGE : {selectedContact.dob.age} Yrs.
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        EMAIL : {selectedContact.email}
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        ADDRESS : {selectedContact.location.city}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </React.Fragment> : null
            }
        </React.Fragment>
    )
};

export default ContactCard;
