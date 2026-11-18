import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList({todoList}){
    if(todoList.length==0){
        return(<p className="empty">표시할 할 일이 없어요.</p>);
    }
    return(
        <ul className="list">
            {todoList.map((item)=>{
                return (
                    <TodoItem
                        key={item.id} 
                        item = {item}
                    />
                )
            })}
        </ul>
    )
}