    import { Outlet } from "react-router-dom"
    import Header from "./components/Header"
    import useLocalStorage from "./hooks/useLocalStorage";
    import { useEffect } from "react";
    export default function Layout() {
        
        const [dark, setDark] = useLocalStorage(
            "dark",
            window.matchMedia("(prefers-color-scheme: dark)").matches // 처음엔 OS 설정을 따름
        )
        useEffect(() => {
            document.documentElement.classList.toggle("dark", dark)
        }, [dark])

        return (
            <main className="app mx-auto my-12 max-w-md rounded-2xl bg-white p-6 text-gray-800 shadow dark:bg-gray-800 dark:text-gray-100">
                <Header dark={dark} setDark={setDark} />
                <Outlet/>
            </main>
        )
    }