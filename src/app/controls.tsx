"use client"

import {useState} from "react";

interface ControlsProps {
    handleItemAdded: (value: string) => void;
}

function Controls(props: ControlsProps) {
    const [value, setValue] = useState("");
    return(
        <div className="flex justify-center">
            <input className="text-black" type="text" onChange={(e)=>setValue(e.target.value)} value={value}/>
            <button className="border border-white" onClick={() => props.handleItemAdded(value)}>Add</button>
        </div>
    );
    
}

export default Controls;