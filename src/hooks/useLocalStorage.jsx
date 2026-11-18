import { useEffect, useState } from "react";

export default function useLocalStorage(key, init){
    const [storageName, setStorageName] = useState(()=>{
        const saved = localStorage.getItem(key);
        return saved != null ? JSON.parse(saved) : init
    });

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(storageName));
    },[key,storageName]);

   return [storageName, setStorageName];
}