import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Note from './components/Note';
import changesNote from './functions/functions';
import { Inote } from './types/types';

const App = () => {
  const g = localStorage.getItem('notes');
  const [notes, setNotes] = useState<Inote[]>(g !== null ? JSON.parse(g) : []);
  const { addNote, deleteNote } = changesNote(notes, setNotes);
  useEffect(() => localStorage.setItem('notes', JSON.stringify(notes)), [notes]);

  function newId(): number {
    let g = Math.random();
    return Math.floor(g * 100000);
  }
  return (
    <>
      <Header addNote={addNote} newId={newId} />
      <main>
        <div className="notes">
          {notes[0] && notes.map((note, i) => {
            return (
              <Note note={note} deleteNode={deleteNote} key={i} />
            )
          })}
        </div>
      </main>
    </>
  )
}
export default App;
