import React from "react";
import NotesItem from "./NotesItem";
import PropTypes from 'prop-types';

function NotesList({Notes})
{
    return(
        <section className="notes-list">
            {
                 Notes.map((note)=>
                     <NotesItem
                         key={note.id}
                         {...note}/>
                 )
            }
            
        </section>
    )
}

NotesList.propTypes ={
    Notes: PropTypes.arrayOf(PropTypes.object).isRequired
} 

export default NotesList;