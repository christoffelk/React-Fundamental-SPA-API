import React from "react";
import PropTypes from 'prop-types';
import { showFormattedDate } from "../utils";
import Button from "./Button";

function NotesDetail({id,title,createdAt,body,onDelete,onArchive,unArchive,archive})
{
    return(
        <section className="detail-page">
            <h3 className="detail-page__title">{title}</h3>
            <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
            <div className="detail-page__body">{body}</div>
            <Button id={id} onDelete={onDelete} onArchive={onArchive} unArchive={unArchive} archive={archive}/>
        </section>
    )
}

NotesDetail.propTypes ={
    id:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    createdAt : PropTypes.string.isRequired,
    body  :PropTypes.string.isRequired,
    onDelete : PropTypes.func.isRequired,
    onArchive : PropTypes.func.isRequired,
    unArchive:PropTypes.func.isRequired
}


export default NotesDetail;