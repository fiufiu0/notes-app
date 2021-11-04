import React from 'react'
import { BsTrashFill } from 'react-icons/bs'
import { FaRegStickyNote } from 'react-icons/fa'

const Sidebar = ({notes, onAddNote, onDeleteNote, activeNote, setActiveNote}) => {
  console.log("Sidebar" , notes)
    return (
      <div className="left-side">

        <div className="left-side-header">
          <h1>Notes</h1>
          <button onClick={onAddNote}><FaRegStickyNote /> Add Note</button>
        </div>

        <div className="left-side-notes">
          {notes.map((note) => {
            return (
              <div key={note.id} className={`left-side-note ${note.id === activeNote && "active"}`} onClick={() => setActiveNote(note.id)}>
                <div className="left-side-title">
                  <strong>{note.title}</strong>
                  <button onClick={() => onDeleteNote(note.id)}><BsTrashFill /></button>
                </div>
    
                <p>{note.body && note.body.substr(0, 99) + "..."}</p>
                <small>
                  Last modified: {new Date(note.time).toLocaleDateString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
                </small>
              </div>
            )
          })}
          
        </div>
      </div>
    )
}

export default Sidebar
