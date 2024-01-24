"use client"

interface TodoItemProps {
    text: string;
}

function TodoItem({text}: TodoItemProps){
    return (
        <div className="p-2 border border-white flex justify-center">
            {text}
        </div>
    )
}

export default TodoItem;