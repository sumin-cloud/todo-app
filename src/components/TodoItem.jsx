import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useTodos } from "../context/TodoContext";

export default function TodoItem({item}){
    const [chgEl, setChgEl] = useState(false);
    const {chgItemText,chgItemDone,deleteItem} = useTodos();
    const nav = useNavigate();
    function goDetail(id){
        
        nav(`/todoDetail/${id}`);
    }
    return(
        <li className={item.done ? 'item done' : 'item'}>
            
            
                <input 
                    type="checkbox"
                    checked={item.done}
                    onChange={()=>chgItemDone(item.id)}
                />
                <label className="label" onDoubleClick={()=>setChgEl(true)}>
                    {chgEl ? 
                    <input 
                        type="text" 
                        defaultValue={item.text}
                        autoFocus
                        onKeyDown={(event)=> {

                            if(event.key == "Enter" ){
                                if(event.target.value.trim() != "" ){
                                    chgItemText(item.id,event.target.value);
                                    setChgEl(false);
                                }else{
                                    setChgEl(false);
                                }
                                
                            }else if(event.key == "Escape"){ 
                                setChgEl(false);
                            }
                        
                            
                        }}
                    
                    />
                    : <span>{item.text}</span>}
            </label>
            <button className="button" onClick={()=>{goDetail(item.id)}}>상세보기</button>
            <button className="delete" onClick={()=>{deleteItem(item.id)}}>삭제하기</button>
        </li>
    )
}