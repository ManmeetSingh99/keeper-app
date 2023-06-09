import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });

  };
  const deleteNote = (id) =>{
    setNotes((prevNotes)=>{
      return(prevNotes.filter((note,index)=>{
        return(index !==id);
      }))
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem,index) => {
        return <Note key={index} id={index} onDelete={deleteNote} title={noteItem.title} content={noteItem.content} />;
      })}
      <Footer />
    </div>
  );
};

export default App;
