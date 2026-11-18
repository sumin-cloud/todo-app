import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { useTodos } from "../context/TodoContext";

export default function TodoDetailPage(){
    const{todoList,deleteItem,chgItemDone} = useTodos();
    const params = useParams();
    const item = todoList.find((item)=>item.id==params.todoId);
    const nav = useNavigate();

    if (!item) {
        return (
            <main className="app">
                <p>할 일을 찾을 수 없어요.</p>
            </main>
        );
    }
    return(
        <main className="app">
            
            <li className="item" style={{fontWeight:"bold", fontSize:"22px"}}>
                <label className="label">{item.text}</label>
                <button className="button" onClick={()=>chgItemDone(params.todoId)}>완료하기</button>
                <button className="delete" onClick={()=>deleteItem(params.todoId)}>삭제하기</button>
            </li>
            <li className="item">  
                <span style={{fontWeight:"bold"}}> 완료여부  : </span>
                <label className="label">{item.done ? "완료" : "진행중"}</label>
            </li>
            <li className="item">
                <span style={{fontWeight:"bold"}}> 생성시각  : </span>
                <label className="label">{new Date(item.id).toLocaleDateString()}</label>
            </li>
            
        </main>
    )
}