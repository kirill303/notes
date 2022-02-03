import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Note from './components/Note';
import { Inote } from './types/types';

const App = () => {
  const g = localStorage.getItem('notes');
  const [notes, setNotes] = useState<Inote[]>(g !== null ? JSON.parse(g) : []);

  useEffect(() => localStorage.setItem('notes', JSON.stringify(notes)), [notes]);

  function addNote(note: Inote) {
    console.log('2')
    let g = notes;
    g.push(note);
    g = JSON.parse(JSON.stringify(g));
    setNotes(g);
  }
  function newId(): number {
    let g = Math.random();
    return Math.floor(g * 100000);

  }
  function deleteNote(type: boolean, id: number): void {
    if (type) {
      let g = notes;
      delete g[id];
      g.filter(e => e && e);
      g = JSON.parse(JSON.stringify(g));
      setNotes(g);
    } else {

    }
  }
  return (
    <>
      <Header addNote={addNote} newId={newId} />
      <main>
        <div className="notes">
          {notes[0] && notes.map((note, i) => {
            return (
              <Note date={note.date} name={note.name} text={note.text} key={i} id={note.id}/>
            )
          })}
        </div>
      </main>
    </>
  )
}
export default App;
