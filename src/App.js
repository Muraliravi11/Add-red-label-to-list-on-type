import React, { useState, useCallback } from 'react';
import './style.css';
import List from './List';
import isUppercase from './utils/isUppercase';
import Items from './Items';

export default function App() {
  const [inputValue, setValue] = useState('');
  const [list, setList] = useState([]);

  const handleOnchange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, inputValue]);
    setValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          onChange={handleOnchange}
          value={inputValue}
          style={{ color: isUppercase(inputValue) }}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <List list={list} />
      <Items />
    </div>
  );
}
