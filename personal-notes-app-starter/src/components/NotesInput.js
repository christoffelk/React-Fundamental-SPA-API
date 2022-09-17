import React from "react";
import PropTypes from 'prop-types';


class NotesInput extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            title:'',
            body:'',
        }
        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeHandler(event)
    {
        this.setState(()=>{
            return{
                title:event.target.value,
            }
        })
    }

    onBodyChangeEventHandler(event){
        this.setState(()=>{
            return{
                body:event.target.value,    
            }
        })
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNotes(this.state)
    }
    render(){
        return(
            <form className="add-new-page__input" onSubmit={this.onSubmitEventHandler}>
                <input className="add-new-page__input__title" 
                    placeholder="Catatan Rahasia"
                    type="text"
                    value={this.state.title}
                    onChange = {this.onTitleChangeHandler}/>
                <input className="add-new-page__input__body"
                    placeholder="Sebenarnya saya adalah ...."
                    contentEditable="true"
                    value={this.state.body}
                    onChange={this.onBodyChangeEventHandler}/>
                <div className="add-new-page__action">
                    <button type="submit" className="action" title="Simpan">ok</button>
                </div>

                

            </form>
        )
    }
}

NotesInput.propTypes ={
    addNotes : PropTypes.func.isRequired
}

export default NotesInput;