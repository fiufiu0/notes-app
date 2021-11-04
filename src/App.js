import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import uuid from 'react-uuid'

function App() {

  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      time: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if(note.id === activeNote) {
        return updatedNote;
      } 

      return note;
    });

    setNotes(updatedNotesArray);
  };

  const onDeleteNote = (id) => {
    const removeNote = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(removeNote);
  };

  const onActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <div className="app">
      <Sidebar notes={notes} onAddNote={onAddNote} onDeleteNote={onDeleteNote} activeNote={activeNote} setActiveNote={setActiveNote}/>
      <Main activeNote={onActiveNote()} onUpdateNote={onUpdateNote}/>
    </div>
  );
}

export default App;
