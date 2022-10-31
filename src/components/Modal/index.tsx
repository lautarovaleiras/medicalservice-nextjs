import React from "react";

export default function Modal({children, onClose}:{children:any,onClose:any}){
    
    
    return <div className="modal">
        <div className="modal-content">
            <button onClick={onClose}>Close</button>
            {children}
        </div>
    </div>

}