import React from "react";

export default function Modal ({
    setModal,
    modal,
    id,
    addTask,
    taskObj,
    setTaskObj,
}) {
    const dn = modal ? "block" : "none";

    return (
        <div className="modal" style={{ display: dn }} onClick={setModal}>
            <div className="modal-body" onClick={(e) => e.stopPropagation.Propagation()}>
                <div>
                    <h2></h2>
                </div>
            </div>
        </div>
    )
}