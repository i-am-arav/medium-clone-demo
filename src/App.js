import React from 'react';
import Header from './components/Header'
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';


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
   
   <HomePage />

    
    </div>

  );
}

export default App;
