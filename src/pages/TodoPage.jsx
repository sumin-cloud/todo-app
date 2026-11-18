import { useEffect, useState } from "react"
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import useLocalStorage from "../hooks/useLocalStorage";
import Header from "../components/Header";
import { useOutletContext } from "react-router-dom";
import { useTodos } from "../context/TodoContext";
const filters = [
    {key : "all", label : "전체"},
    {key : "active", label : "진행중"},
    {key : "done", label : "완료"},
]


export default function TodoPage(){
    const {todoList,clearDone} = useTodos();
    const [filter, setFilter] = useState("all");
    const visibleTodoList =  todoList.filter((todo)=>{
        if(filter == "active"){
            return !todo.done
        }else if(filter == "done"){
            return todo.done
        }
        return true;
    })

    const remaining = todoList.filter((todo)=> !todo.done).length;
    const doneCount = todoList.filter((todo)=> todo.done).length;
    
    
    return(
        
        <main className="app">

            <TodoForm/>
            <div className="filters">
                {filters.map((f) => {
                    return (
                        <button 
                            key={f.key} 
                            className={filter == f.key ? "filter active" : "filter"}
                            onClick={()=>{setFilter(f.key)}}
                        >
                        {f.label}
                        </button>
                    )
                })}
            </div>
            <TodoList todoList={visibleTodoList}/>
            <footer className="footer">
                <span>남은 할일 : {remaining}</span>
                {doneCount > 0 && <button className="link-btn" onClick={()=>clearDone()}>완료된 항목 지우기</button>}
                
            </footer>
        </main>
    )
};