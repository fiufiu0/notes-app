import React from 'react'

const Sidebar = ({notes, onAddNote, onDeleteNote}) => {
  console.log("Sidebar" , notes)
    return (
      <div className="left-side">

        <div className="left-side-header">
          <h1>Notes</h1>
          <button onClick={onAddNote}>Add Note</button>
        </div>
        
        <div className="left-side-notes">
          {notes.map((note) => {
            return (
              <div key={note.id} className="left-side-note">
                <div className="left-side-title">
                  <strong>{note.title}</strong>
                  <button onClick={() => onDeleteNote(note.id)}>Delete</button>
                </div>
    
                <p>{note.body}</p>
                <small>
                  Last modified: {new Date(note.time).toLocaleDateString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
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
