import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import uuid from 'react-uuid'

function App() {

  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "No text inside",
      time: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };

  const onDeleteNote = (id) => {
    const removeNote = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(removeNote);
  }

  return (
    <div className="app">
      <Sidebar notes={notes} onAddNote={onAddNote} onDeleteNote={onDeleteNote} />
      <Main />
    </div>
  );
}

export default App;
