import React from 'react'

const Main = () => {
    return (
      <div className="right-side">
        <div className="right-side-note-edit">
          <form>
            <label id="title">Title</label>
          <input type="text" id="title" placeholder="..." autoFocus />
          <label id="body">Note</label>
          <textarea id="body" placeholder="Write your note here!" />
          </form>
        </div>
      </div>

    )
}

export default Main
