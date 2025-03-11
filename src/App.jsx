import { BrowserRouter, Route, Routes, Link, HashRouter, MemoryRouter, NavLink,Navigate } from 'react-router'

/// COMPONENTS
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/postItem';
import NotFound from './404';

// Nested routes
import Guests from './components/guests';
import Admins from './components/admins';
import Users from './components/users';

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
              <NavLink to="/" 
                className={({isActive})=>isActive ? 'nav-link active':'nav-link'}
              >Home</NavLink>
            </li>
            <li className='nav-item'>
              <Link to="posts" className='nav-link'>Posts</Link>
            </li>
            <li className='nav-item'>
              <Link to="profile" className='nav-link'>Profile</Link>
            </li>
            <li className='nav-item'>
              <Link to="users" className='nav-link'>Users</Link>
            </li>
          </ul>
        </header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="posts" element={<Posts/>}/>  
          <Route path="posts/:id" element={<PostItem/>}/>
          <Route path="profile" element={<Profile/>}/>  
          <Route path="users" element={<Users/>}>
            <Route path='guests' element={<Guests/>}/>
            <Route path='admins' element={<Admins/>}/>
          </Route>
          <Route path="*" element={<NotFound/>}/>
          
          {/* <Route path="profile" element={
            <Navigate replace to="/"/>
          }/>  */}
        </Routes>  
      </div>
    </BrowserRouter>
  )
}

export default App
