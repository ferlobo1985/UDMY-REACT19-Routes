import { BrowserRouter, Route, Routes, Link } from 'react-router'

/// COMPONENTS
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Home</Link><br/>
        <Link to="posts">Posts</Link><br/>
        <Link to={{
          pathname:'profile',
          hash:'#francis',
          search:'?profile=true'
        }}>Profile</Link><br/>
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
