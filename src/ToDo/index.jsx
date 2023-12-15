import React from 'react';
import "./ToDo.css"

function ToDo({children}) {
    return(
        <div className="ToDo">
            {children}
        </div>
    );
}
    


export { ToDo };