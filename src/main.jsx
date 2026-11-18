import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoPage from './pages/TodoPage.jsx'
import TodoDetailPage from './pages/TodoDetailPage.jsx'
import './index.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Stats from './pages/StatsPage.jsx'
import Empty from './pages/EmptyPage.jsx'
import Layout from './Layout.jsx'
import { TodoProvider } from './context/TodoContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TodoProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<TodoPage/>}></Route>
              <Route path='/stats' element={<Stats/>}></Route>
              <Route path='/todoDetail/:todoId' element={<TodoDetailPage/>}></Route>
            </Route>
            
            <Route path='*' element={<Empty/>}></Route>
          </Routes>
        </TodoProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
