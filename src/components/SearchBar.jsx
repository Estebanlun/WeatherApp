import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (<div>
    <input type={'text'} placeholder={'Coloque su Ciudad'}/>
    <button onClick={() => onSearch('Una Ciudad')}> Buscar Ciudad </button>
  </div>)
};