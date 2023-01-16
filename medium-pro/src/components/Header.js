import React, {useState} from "react";

export const Header = ({ style, onLogin, user, setUser, showModal, openModal }) => {
    const cates = [
        {id: 1, title: "Our strory"},
        {id: 2, title: "Membership"},
        {id: 3, title: "Write"},
        {id: 4, title: "Sign in"},
      ];

        return (
            <div style={style} className="header">
                <div className="container d-flex justify-content-between align-items-center">
                    <img width={150} height={30} className="img" src={"https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"} alt="logo"/>
                    <nav>
                        <ul className="d-flex align-items-center">
                            {cates.map((a, index ) => (
                            <>
                            <li className="list-item" key={index}>
                            {a.id == 4 ? (
                                user ? (user) : (
                                    <span className="btn btn-primary" onclick={openModal}>
                                        {a.title}
                                    </span>
                                ) 
                            ): (
                            <a className="title" href={a.link}>
                                {a.title}
                                </a>
                            )} 
                            </li>
                            </>
                            ))}
                           {user && (
                            <button className="btn btn-warning" onClick={() => setUser ("")}>
                            Log Out
                            </button>
                           )}
                            
                            
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }