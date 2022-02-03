import React, { FC } from 'react';
import { Inote } from '../types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

interface NoteProps {
   deleteNode: (type: boolean, id: number) => void,
   note: Inote
}

const Note: FC<NoteProps> = ({ deleteNode, note }) => {
   return (
      <div id={String(note.id)} className='note'>
         <div className='note__left'>
            <p className='note__name'>{note.name}</p>
            <p className='note__text'>{note.text}</p>
         </div>
         <div className='note__right'>
            <FontAwesomeIcon icon={faCheck} className='check' onClick={() => deleteNode(true, note.id)} />
            <FontAwesomeIcon icon={faTimes} className='cross' onClick={() => deleteNode(false, note.id)} />
         </div>
      </div>

   )
}
export default Note;