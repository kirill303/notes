import React, { FC } from 'react';
import { Inote } from '../types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
const Note: FC<Inote> = ({ date, name, text, id, }) => {
   console.log('e');
   return (
      <div className='note' id={String(id)}>
         <div className='note__left'>
            <p className='note__name'>{name}</p>
            <p className='note__text'>{text}</p>
         </div>
         <div className='note__right'>
            <FontAwesomeIcon icon= {faCheck} className='check'/>
            <FontAwesomeIcon icon= {faTimes} className='cross'/>
         </div>
      </div>
   )
}
export default Note;