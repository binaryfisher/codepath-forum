import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import './App.css'
import CreatePost from './routes/CreatePost'
import Header from './routes/Header'
import Home from './routes/Home'
import Post from './routes/Post'
import EditPost from './routes/EditPost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path="/" index={false} element={<Header />} >
              <Route path='/' index={true} element={<Home />} />
           </Route>

           <Route path="/" element={<Header />} >
              <Route path='/createpost' element={<CreatePost />} />
           </Route>

           <Route path="/" element={<Header />} >
              <Route path='/post/:id' element={<Post />} />
           </Route>

           <Route path="/" element={<Header />} >
              <Route path='/post/:id/edit' element={<EditPost />} />
           </Route>


        </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
