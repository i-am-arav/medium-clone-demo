import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import ComponentA from './pages/ComponentA';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import NewPost from './pages/NewPost';


function App() {
  const [changeNavColor, setChangeNavColor] = React.useState(false);
  const changeColor = () => {
    if(window.scrollY > 120) {
      setChangeNavColor(true);
    }
    else {
      setChangeNavColor(false);
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    }
  })
  return (
    <div className='m-0 p-0 w-full'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/new' element = {<NewPost />} />
        <Route path='*' element={<h1>404</h1>} />
        {/*Ignore this route */}
        <Route path='/practice' element={<ComponentA />} />
 
      </Routes>
   
   

    
    </div>

  );
}

export default App;
