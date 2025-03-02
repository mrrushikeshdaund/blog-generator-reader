import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import BlogPostPage from './pages/BlogPost';
import NavBarComponent from './components/NavBar';
import ViewBlog from './pages/ViewBlog';

function App() {
  return (
    <>
      <Router>
        <NavBarComponent />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/post/:id' element={<ViewBlog />} />
              <Route path='/createBlog' element={<BlogPostPage />} />
            </Routes>
      </Router>
    </>
  );
}

export default App;
