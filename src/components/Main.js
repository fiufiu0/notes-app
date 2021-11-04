import React from 'react'
import {MdOutlineSubject, MdOutlineNote} from 'react-icons/md'

const Main = ({activeNote, onUpdateNote}) => {

  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      time: Date.now(),
    })
  }

  if(!activeNote) return <div className="no-active-note">No note selected! Click 'Add Note' to create new note. Then select the new one on the left and edit it! </div>

    return (
      <div className="right-side">

        <div className="right-side-note-edit">
          <form>
            <label className="title" id="title"><MdOutlineSubject />Title</label>
            <input type="text" id="title" placeholder="..." value={activeNote.title} onChange={(e) => onEditField("title", e.target.value)} autoFocus />
            <label className="body" id="body"><MdOutlineNote /> Note</label>
            <textarea id="body" placeholder="Write your note here!" value={activeNote.body} onChange={(e) => onEditField("body", e.target.value)}/>
          </form>
        </div>

      </div>

    )
}

export default Main
