import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Note from './components/Note';
import useChangesNote from './functions/note_functions';
import { Inote } from './types/types';

const App = () => {
  const g = localStorage.getItem('notes');
  const [notes, setNotes] = useState<Inote[]>(g !== null ? JSON.parse(g) : []);
  const f = localStorage.getItem('doneNotes');
  const [doneNote, setDoneNote] = useState<number>(f !== null ? JSON.parse(f) : 0);

  const { addNote, deleteNote } = useChangesNote(notes, setNotes, doneNote, setDoneNote);

  useEffect(() => localStorage.setItem('notes', JSON.stringify(notes)), [notes]);
  useEffect(() => localStorage.setItem('doneNotes', JSON.stringify(doneNote)), [doneNote]);
  function newId(): number {
    let g = Math.random();
    return Math.floor(g * 100000);
  }
  return (
    <>
      <Header addNote={addNote} newId={newId} doneNote = {doneNote}/>
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
