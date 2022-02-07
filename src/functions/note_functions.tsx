import React, { Children } from 'react';
import { Inote } from '../types/types';

export default function useChangesNote
   (
      notes: Inote[],
      setNotes: (g: any) => void,
      doneNote: number,
      setDoneNote: (g: number) => void
   ) {

   function changeNote(newNote: Inote[]): void {
      setNotes(
         JSON.parse(JSON.stringify(newNote))
      );
   }
   
   function addNote(note: Inote) {
      let newNotes = notes;
      newNotes.push(note);
      changeNote(newNotes)
   }

   function deleteNote(type: boolean, id: number): void {
      let v = document.getElementById(String(id));
      if (!v) return;
      v.style.animation = type ? '2s greenNote' : '2s redNote'
      setDoneNote(type ? doneNote + 1 : doneNote - 1);

      setTimeout(() => {
         if (!v) return;
         v.style.animation = ''
      }, 1999);

      setTimeout(() => {
         changeNote(notes.filter(e => e.id !== id));
      }, 2000);

   }

   return { addNote, deleteNote }
}