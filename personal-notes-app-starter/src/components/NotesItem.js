import React from "react";
import propTypes from 'prop-types';
import { Link } from "react-router-dom";
import NotesItemBody from "./NotesItemBody";


function NotesItem({id,title,createdAt,body}){
    return(
        <article className="note-item">
            <h3 className="note-item__title"><Link to={`/notes/${id}`}>{title}</Link></h3>
            <NotesItemBody createdAt={createdAt} body={body}/>
        </article>
    )   
}

NotesItem.propTypes={
    title:propTypes.string.isRequired,
    createdAt:propTypes.string.isRequired,
    body : propTypes.string.isRequired
}

export default NotesItem;