import { useState } from "react";
import { useTodos } from "../context/TodoContext";

export default function TodoForm(){
    const [todoText,setTodoText] = useState("");
    const {addTodo}  = useTodos();
    function handleSubmit(e){
        e.preventDefault();
        addTodo(todoText);
        setTodoText("");
    }
    return(
        <form className="flex gap-2" onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="flex-1 rounded-lg border border-gray-300 px-3 py-2.5 text-sm
                   focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200" 
                value={todoText}
                onChange={(event)=>{setTodoText(event.target.value)}}
            />
            <button className="rounded-lg bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white
                   transition-colors hover:bg-indigo-600 active:bg-indigo-700" type="submit"> 추가 </button>
            
        </form>
    )
}