import React, { useState } from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const[note,setnote]=useState({
    title:"",
    content:""
  });

  const[isExpand,setExpand]=useState(false);

  function handleChange(event){
    const {name,value}=event.target;
    setnote(prevNote => {
      return {
        ...prevNote,
        [name]:value
      };
    });
  }
  function submitNote(event){
    props.onAdd(note);
    setnote({
      title:"",
      content:""
    });
    event.preventDefault();
    }
  function expand(){
    setExpand(true);
  }
    return (
        <div>
          <form className="create-note">

          {isExpand && (
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
            />
          )}

            <textarea
              name="content"
              onClick={expand}
              onChange={handleChange}
              value={note.content}
              placeholder="Take a note..."
              rows={isExpand?3:1}
            />
          <Zoom in={isExpand}>
            <Fab onClick={submitNote}>
`             <AddCircleIcon/>`
            </Fab>
          </Zoom>
          </form>
        </div>
      );
    }

export default CreateArea;
