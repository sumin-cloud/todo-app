import { useOutletContext } from "react-router-dom";
import Header from "../components/Header";
import useLocalStorage from "../hooks/useLocalStorage";
import { useTodos } from "../context/TodoContext";

export default function Stats(){
    const {todoList} = useTodos();
    const total = todoList.length
    const doneCount = todoList.filter((item) => item.done).length
    const rate = total === 0 ? 0 : Math.round((doneCount / total) * 100)
    return(
        <main className="app">
        
        <table>
            <tbody>
                <tr>
                    <th>
                        전체 개수
                    </th>
                    <td>
                        {total}
                    </td>
                </tr>
                <tr>
                    <th>
                        완료 개수
                    </th>
                    <td>
                        {doneCount}
                    </td>
                </tr>
                <tr>
                    <th>
                        진행 중 개수
                    </th>
                    <td>
                        {total-doneCount}
                    </td>
                </tr>
                <tr>
                    <th>
                        완료율(%)
                    </th>
                    <td>
                        {
                            rate
                        }%
                    </td>
                </tr>
            </tbody>
        </table>
       
       

        </main>
    )
}