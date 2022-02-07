import { faArrowAltCircleRight, faBars, faCheck, faCheckCircle, faHamburger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useEffect, useState } from 'react';
import { Inote } from '../types/types';

interface HeaderProps {
   addNote: (note: Inote) => void;
   newId: () => number;
   doneNote: number
}
const Header: FC<HeaderProps> = ({ addNote, newId, doneNote }) => {
   const [name, setName] = useState<string>('');
   const [text, setText] = useState<string>('');
   const [bars, setBars] = useState<boolean>(false);

   useEffect(() => {
      let menu = document.getElementById('.new__bars-menu');
      if (!menu) return;
      menu.className = `new__bars-menu ${bars ? 'new__bars-menu-up' : 'new__bars-menu-down'}`
   }, [bars])

   function preAddNote(): void {
      (name && text) && addNote({ name, text, date: new Date, id: newId() })
      setName('');
      setText('');
   }

   return (
      <header className='header'>
         <div>
            <h1 className='title'>Список дел</h1>
            <div className='done' style={{ color: doneNote > 0 ? 'green' : 'red' }}>Ваша продутивность: {doneNote}</div>
         </div>
         <div onClick={() => setBars(!bars)}>
            <FontAwesomeIcon icon={faBars} style={{ fontSize: '30px' }} onClick={() => setBars(!bars)} />
         </div>
         <div className="new__bars-menu" id={'.new__bars-menu'}>

            <textarea
               value={text}
               rows={20}
               cols={45}
               placeholder='Сюда текст'
               onChange={(e) => e && setText(e.target.value)}
               className='text'
            />
            <div className='nb'>
               <input type="text"
                  value={name}
                  placeholder='Сюда название'
                  onChange={(e) => e && setName(e.target.value)}
                  className='name'
               />
               <button
                  onClick={preAddNote}
                  className='add' >
                  <FontAwesomeIcon icon={faCheckCircle} />
               </button>
            </div>
         </div>
      </header>
   )
}
export default Header;