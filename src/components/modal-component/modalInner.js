import React from "react";
// import { Form } from "react-bootstrap";

const ModalInner = props => {
    if (!props.show) {
        return null
    }

    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">{props.title}</h4>
                </div>
                <div className="modal-body">
                    {props.children}                
                </div>
                <div className="modal-footer row">
                    <div className="col-2">
                        <button onClick={props.edit} className="btn btn-primary">Edit</button>
                    </div>
                    <div className="col-2">
                        <button onClick={props.onClose} className="btn btn-secondary">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalInner;
