import { NavLink } from "react-router-dom"

export default function Header({ dark, setDark }){
    const base =
        "flex-1 rounded-lg py-2 text-center text-sm font-medium transition-colors duration-150"

    function tabClass({ isActive }) {
        return isActive
            ? `${base} bg-white text-indigo-500 shadow-sm`
            : `${base} text-gray-500 hover:text-gray-800`
    }
   
   
    return (
        <header className="mb-5 flex items-center gap-2">
            <div className="flex flex-1 gap-1 rounded-xl bg-gray-100 p-1 dark:bg-gray-700">
                <NavLink className={tabClass} to="/" end>
                    목록
                </NavLink>
                <NavLink className={tabClass} to="/stats">
                    통계
                </NavLink>
            </div>
            <button
                onClick={() => setDark(!dark)}
                className="rounded-lg bg-gray-100 px-3 py-2 text-base dark:bg-gray-700"
                aria-label="다크모드 전환"
            >
                {dark ? "☀️" : "🌙"}
            </button>
        </header>
    )
}