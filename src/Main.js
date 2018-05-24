import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
// import firebase from './.firebaserc'

//   // Set the configuration for your app
//   // TODO: Replace with your project's config object
//   var config = {
//     apiKey: "apiKey",
//     authDomain: "projectId.firebaseapp.com",
//     databaseURL: "https://databaseName.firebaseio.com",
//     storageBucket: "bucket.appspot.com"
//   };
//   firebase.initializeApp(config);

//   // Get a reference to the database service
//   var database = firebase.database();

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      currentNote: this.blankNote(),
      notes: [],
    }
  }

  componentDidMount() {
    const notes=JSON.parse(window.localStorage.getItem('notes'))
    if(notes){
      this.setState({notes})
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

    window.localStorage.setItem('notes', JSON.stringify(notes))
  }

  deleteNote = (note) => {
    const notes = [...this.state.notes]
    const i = notes.findIndex(currentNote => currentNote.id === note.id)
    if(i>-1){
      notes.splice(i, 1)
      this.setState({ notes })
      window.localStorage.setItem('notes', JSON.stringify(notes))
    }
    this.setCurrentNote(this.blankNote())
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