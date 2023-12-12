import React from 'react';
import "./ToDo.css"

function ToDo({children}) {
    return(
        <ul className="ToDo">
            {children}
        </ul>
    );
}
    


export { ToDo };