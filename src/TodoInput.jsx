import {useState} from 'react';

export default function TodoInput({handleTodoList}){
  const [text, setText] = useState("");
  const handleInput = (e) => {
    setText(e.target.value);
  }
  const handleAdd = () => {
    handleTodoList(text);
  }
  return (
    <>
      <input type="text" placeholder="Enter todo" value={text} onChange={handleInput} />
      <button onClick={handleAdd}>Add</button>
    </>
  )
}