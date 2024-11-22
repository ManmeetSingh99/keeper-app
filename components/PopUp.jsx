import React, { useState } from "react";

const PopUp = ({
  currentEditingNote,
  notes,
  currentEditingId,
  setNotes,
  setOpenPopUp,
}) => {
  const [title, setTitle] = useState(currentEditingNote.title);
  const [desc, setDesc] = useState(currentEditingNote.content);
  const addEditedNotes = () => {
    setNotes(
      notes.map((note, index) =>
        index === currentEditingId ? { title: title, content: desc } : note
      )
    );
    setOpenPopUp(false);
  };
  return (
    <div>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="noteDes">Note</label>
      <input
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button onClick={addEditedNotes}>Add</button>
    </div>
  );
};

export default PopUp;
