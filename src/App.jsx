import { BrowserRouter, Route, Routes, Link } from 'react-router'

/// COMPONENTS
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/postItem';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
          <Link to="/" className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'>
            <span className='fs-4'>My App</span>
          </Link>

          <ul className='nav nav-pills'>
            <li className='nav-item'>
              <Link to="/" className='nav-link'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="posts" className='nav-link'>Posts</Link>
            </li>
            <li className='nav-item'>
              <Link to="profile" className='nav-link'>Profile</Link>
            </li>
          </ul>
        </header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="posts" element={<Posts/>}/>  
          <Route path="posts/:id" element={<PostItem/>}/>
          <Route path="profile" element={<Profile/>}/>  
        </Routes>  
      </div>
    </BrowserRouter>
  )
}

export default App
