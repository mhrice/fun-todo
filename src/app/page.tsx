'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import TodoItem from "./todo-item";
import Controls from "./controls"
export default function Home() {

  const [items, setItems] = useState<string[]>([]);
  const [show, setShow] = useState<boolean>(false);

  const handleItemAdded = (value: string) => {setItems([...items, value])}
  const handleToggleClicked = () => {setShow(!show);}
  return (
    <main className="flex h-screen flex-col p-24 gap-8">
        <h1 className="text-4xl font-bold flex justify-center">Todo List</h1>
        <button onClick={handleToggleClicked}>Toggle List</button>
        {show ?
        <div className="flex flex-col border border-white w-full h-full">
          {items.map((item, index) => { return <TodoItem text={item} key={index}/>})}
        </div> :
        <Controls handleItemAdded={handleItemAdded}/>
        }
    </main>
  );
}

