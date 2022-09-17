import React from "react";
import { addNote } from "../utils/local-data";
import NotesInput from "../components/NotesInput";
import { useNavigate } from "react-router-dom";

function AddPage(){
    const navigate = useNavigate()

    function onAddNotesHandler(note){
        addNote(note);
        navigate("/");
    }

    return(
        <section className="add-new-page">
            <NotesInput addNotes={onAddNotesHandler}/>
        </section>
    )
}

export default AddPage;