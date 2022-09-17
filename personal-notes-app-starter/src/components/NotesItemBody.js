import React from "react";
import { showFormattedDate } from "../utils";
import PropTypes from 'prop-types';


function NotesItemBody({createdAt,body}){
    return(
        <>
            <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
            <p className="note-item__body">{body}</p>
        </>
    ) 
}


NotesItemBody.proptTypes = {
    createdAt : PropTypes.string.isRequired,
    body : PropTypes.string.isRequired
}

export default NotesItemBody;