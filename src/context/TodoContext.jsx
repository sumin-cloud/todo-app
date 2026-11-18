import { createContext, useContext,} from "react";
import { useMutation, useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
const TodoContext = createContext();

export function TodoProvider({children}){

    const {data: todoList = [], isLoading, isError, error}= useQuery({
        queryKey : ["todos"],
        queryFn : ()=>fetch("http://localhost:3001/todos").then((res)=>res.json())
    })

    const queryClient = useQueryClient();
    const addMutation = useMutation({
        mutationFn : async(newTodo)=>{
            const res = 
                await fetch("http://localhost:3001/todos", {
                    method : "POST",headers:{"Content-Type":"application/json"},
                    body: JSON.stringify(newTodo)
                })
            if(res.ok){
                return res.json();
            }else{
                throw new Error("서버 오류");
            }
        }
        ,onSuccess : ()=> queryClient.invalidateQueries({queryKey : ["todos"]})
        ,onError : (err)=>alert("저장실패")
    })
    const updateMutation = useMutation({
        mutationFn : async({id, ...fields})=>{
            const res = await fetch(`http://localhost:3001/todos/${id}`,{
                method:"PATCH",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(fields)
            })
            if(res.ok){
                return res.json();
            }else{
                throw new Error("서버 오류");
            }
        }
        ,onSuccess : ()=> queryClient.invalidateQueries({queryKey : ["todos"]})
        ,onError : (err)=>alert("저장실패")
    })
    const deleteMutation = useMutation({
        mutationFn : async(id)=>{
                const res = await fetch(`http://localhost:3001/todos/${id}`,{
                method:"DELETE"
            })
        }
        ,onSuccess : ()=> queryClient.invalidateQueries({queryKey : ["todos"]})
        ,onError : (err)=>alert("삭제실패")
    })
    const deleteAllMutation = useMutation({
        mutationFn : async(doneItems)=>{
            await Promise.all(
                doneItems.map((item)=>
                    fetch(`http://localhost:3001/todos/${item.id}`,{method:"DELETE"}))
            )
        }
        ,onSuccess : ()=> queryClient.invalidateQueries({queryKey : ["todos"]})
        ,onError : (err)=>alert("삭제실패")
    })
    function addTodo(addText){
        const trimmed = addText.trim();
        if (trimmed == "")  return;
        const newTodo = {id:Date.now(), text: trimmed, done : false}
        addMutation.mutate(newTodo);
    }
    function chgItemText(id,value){
        updateMutation.mutate({id, text : value});
    }
    function chgItemDone(id){
        const item = todoList.find((item)=>item.id == id);
        updateMutation.mutate({id, done: !item.done});
    }
    function deleteItem(id){
        deleteMutation.mutate(id);
    }

    function clearDone(){
        const doneItems = todoList.filter((item)=> item.done);
        deleteAllMutation.mutate(doneItems)
    }
        if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        return <div>에러발생 {error.message}</div>
    }
    return(
        <TodoContext.Provider
            value={{
                todoList,addTodo,chgItemText,chgItemDone,clearDone,deleteItem
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}
export function useTodos(){
    return useContext(TodoContext);
}