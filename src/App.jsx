import { BrowserRouter, Route, Routes } from 'react-router'

/// COMPONENTS
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';

function App() {
  return (
    <BrowserRouter>
      <header>
        Header
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="posts" element={<Posts/>}/>  
        <Route path="profile" element={<Profile/>}/>  
      </Routes>  
    </BrowserRouter>
  )
}

export default App
