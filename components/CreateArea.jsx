import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [isExpanded,setIsExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const handleChange = (event) => {
    const {name, value} = event.target;
    
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
    
  };

  const submitNote = (event) => {
        event.preventDefault();
        props.onAdd(note);
        setNote({
            title: "",
            content: "",
        });
  }
  const expand = () => {
    setIsExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {
          isExpanded && <input
          onChange={handleChange}
          name="title"
          value={note.title}
          placeholder="Title"
        />
        }
        <textarea
          onChange={handleChange}
          onClick={expand}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
        />
        <Zoom in={isExpanded}>
        <Fab color="success" onClick={submitNote} >
            <AddIcon/>
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
