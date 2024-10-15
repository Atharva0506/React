
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Game from './components/Game.tsx'


const NoPage = ()=> {return (<h1 className='flex h-screen justify-center items-center text-4xl font-extrabold'>Page Not Found 404</h1>)}
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="game" element={<Game />} />      
      <Route path="*" element={<NoPage />} />
    </Route>
  </Routes>
</BrowserRouter>
)
