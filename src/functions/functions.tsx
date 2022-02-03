import React, { Children } from 'react';
import { Inote } from '../types/types';

export default function changesNote(notes: Inote[], setNotes: (g: any) => void,) {
   function changeNote(g: Inote[]) {
      g = JSON.parse(JSON.stringify(g));
      setNotes(g);
   }
   function addNote(note: Inote) {
      let g = notes;
      g.push(note);
      changeNote(g)
   }

   function deleteNote(type: boolean, id: number): void {
      console.log(id);
      let v = document.getElementById(String(id));
      if (!v) return;
      v.style.animation = type ? '2s greenNote' : '2s redNote'
      setTimeout(() => {
         if (!v) return;
         v.style.animation = ''
      }, 1999);

      setTimeout(() => {
         let g = notes;
         g = g.filter(e => e.id !== id);
         changeNote(g);
      }, 2000);

   }

   return { addNote, deleteNote }
}