import React from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";


function Button({id,onDelete,onArchive,archive,unArchive})
{
    const navigate=useNavigate();
    return(
        <div className="detail-page__action">
            {
                archive===false
                ? <button className="action" type="button" title="archive" onClick={()=>{onArchive(id);navigate("/archives")}}>Arc</button>
                : <button className="action" type="button" title="unarchive" onClick={()=>{unArchive(id);navigate("/")}}>Undo</button>
            }
             
        <button
        className="action" type="button"  onClick={()=> {onDelete(id);navigate("/")}}>Del</button>
        </div>
       
    )
}
Button.propTypes = {
    id:PropTypes.string.isRequired,
    onDelete:PropTypes.func.isRequired,
    onArchive:PropTypes.func.isRequired,
    unArchive:PropTypes.func.isRequired
}

export default Button;