import React from "react";
import ReactDOM from "react-dom";

function Modal({children}){
    return ReactDOM.createPortal(
        <div className="Modal">
            {children}
        </div>//1º PARAMETER
        , document.getElementById("modal")//2º PARAMETER
        )
}

export {Modal}