import React, { FC, useEffect, useState } from 'react';
import { Inote } from '../types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import ReactMarkdown from 'react-markdown';

interface NoteProps {
   deleteNode: (type: boolean, id: number) => void,
   note: Inote
}

const Note: FC<NoteProps> = ({ deleteNode, note }) => {

   return (
      <div id={String(note.id)} className='note'>
         <div className="note__top">
            <p className='note__name'>{note.name}</p>
            <FontAwesomeIcon icon={faCheck} className='check' onClick={() => deleteNode(true, note.id)} />
            <FontAwesomeIcon icon={faTimes} className='cross' onClick={() => deleteNode(false, note.id)} />
         </div>
         <div className='note__text'>
            <ReactMarkdown>
               {note.text}
            </ReactMarkdown></div>
      </div>

   )
}
export default Note;