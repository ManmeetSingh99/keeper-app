import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import PopUp from "./PopUp";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [currentEditingNote, setCurrentEditingNote] = useState();
  const [currentEditingId, setCurrentEditingId] = useState();

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  };
  const EditNode = (id) => {
    // console.log(notes);

    // console.log(id);
    setCurrentEditingId(id);
    const editingNote = notes.find((note, index) => index === id);
    // console.log(editingNote);
    setCurrentEditingNote(editingNote);
  };
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            setOpenPopUp={setOpenPopUp}
            onEdit={EditNode}
            onDelete={deleteNote}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}
      {openPopUp && (
        <PopUp
          currentEditingId={currentEditingId}
          currentEditingNote={currentEditingNote}
          notes={notes}
          setNotes={setNotes}
          setOpenPopUp={setOpenPopUp}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;
