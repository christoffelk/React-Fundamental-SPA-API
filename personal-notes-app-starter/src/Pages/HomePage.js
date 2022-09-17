import React from "react";
import { Link } from "react-router-dom";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import { getActiveNotes } from "../utils/local-data";


class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            notes : getActiveNotes(),
            keyword: props.defaultKeyword || ""
        }
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }
    onKeywordChangeHandler(keyword){
        this.setState(()=>{
            return{
                keyword,
            }
        })
        
    }
    render(){
        const notes = this.state.notes.filter((note)=> {
            return note.title.toLowerCase().includes(this.state.keyword.toLowerCase());
        })
        return(
            <section className="homepage">
                <h2>Catatan Aktif</h2>
                <SearchBar keyword={this.state.keyword} keywordChange = {this.onKeywordChangeHandler}/>
                {this.state.notes.length
                  ?  <NotesList Notes={notes}/>
                  : "Tidak ada Catatan"
                }
                
                <div className="homepage__action">
                    <button className="action" type="button" title="tambah"><Link to="/add">+</Link></button>
                </div>
            </section>
        )
    }
}


export default HomePage;