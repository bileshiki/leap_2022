import React from "react";
import {Outlet} from "react-router-dom";

export default function Contact () {
    
    return (
        <div className="row">
            <div className="col-md-3">
                <div className="list-group">
                    <div className="list-group-item">
                        <a className="text-decoration-none" href="/contact/person">Person</a>
                    </div>
                    <div className="list-group-item">
                        <a className="text-decoration-none" href="/contact/enterprise">Enterprise</a>
                    </div>
                    <div className="list-group-item">
                    <a className="text-decoration-none" href="/contact/phone">Phone</a>
                    </div>
                </div>
                <div className="col-md-9">
                    <h2>Contact Page</h2>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}