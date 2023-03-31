import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import './App.css'
import CreatePost from './routes/CreatePost'
import Header from './routes/Header'
import Home from './routes/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Header />} >
              <Route path='/home' index={true} element={<Home />} />
           </Route>

           <Route path="/" element={<Header />} >
              <Route path='/createpost' element={<CreatePost />} />
           </Route>
        </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
