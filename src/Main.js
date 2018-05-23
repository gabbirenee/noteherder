import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      currentNote: this.blankNote(),
      notes: [],
    }
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  setCurrentNote = (note) => {
    this.setState({ currentNote: note })
  }

  resetCurrentNote = () => {
    this.setCurrentNote(this.blankNote())
  }

  saveNote = (note) => {
    const notes = [...this.state.notes]

    if (!note.id) {
      // new note
      note.id = Date.now()
      notes.push(note)
    } else {
      // existing note
      const i = notes.findIndex(currentNote => currentNote.id === note.id)
      notes[i] = note
    }

    this.setState({ notes })
    this.setCurrentNote(note)
  }

  deleteNote = (note) => {
    const notes = [...this.state.notes]
    const i = notes.findIndex(currentNote => currentNote.id === note.id)
    console.log(i)
    notes.splice(i, 1)

    this.setState({ notes })
    this.setCurrentNote(this.blankNote())
    // if(i===notes.length-1)
    // {
    //   this.setCurrentNote(this.blankNote())
    // } else {
    //   this.setCurrentNote(notes[i-1])
    // }
  }

  render() {
    return (
      <div className="Main" style={style}>
        <Sidebar resetCurrentNote={this.resetCurrentNote} />
        <NoteList
          notes={this.state.notes}
          setCurrentNote={this.setCurrentNote}
        />
        <NoteForm
          currentNote={this.state.currentNote}
          saveNote={this.saveNote}
          deleteNote={this.deleteNote}
        />
      </div>
    )
  }
}

const style = {
  display: 'flex',
  height: '100vh',
  alignItems: 'stretch',
}

export default Main