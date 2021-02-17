import React from 'react';
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";

let ContactApp = () => {
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="h3">Contact App</div>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad atque cum,
                            cumque delectus dolore ea, et explicabo fugiat illum incidunt itaque iusto
                            libero mollitia nihil optio quaerat saepe voluptatem.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9">
                        <ContactList/>
                    </div>
                    <div className="col-md-3">
                        <ContactCard/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ContactApp;
