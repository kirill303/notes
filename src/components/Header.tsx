import React, { FC, useState } from 'react';
import { Inote } from '../types/types';

interface HeaderProps {
   addNote: (note: Inote) => void;
   newId: () => number;
}
const Header: FC<HeaderProps> = ({ addNote, newId }) => {
   const [name, setName] = useState<string>('');
   const [text, setText] = useState<string>('');
   return (
      <header className='header'>
         <h1 className='title'>Add assets</h1>
         <input type="text" value={name} placeholder='Сюда имя' onChange={(e) => e && setName(e.target.value)} className='name' />
         <input type="text" value={text} placeholder='Сюда текст' onChange={(e) => e && setText(e.target.value)} className='text' />
         <button onClick={() => (name && text) && addNote({ name, text, date: new Date, id: newId() })} className='add' />
      </header>
   )
}
export default Header;