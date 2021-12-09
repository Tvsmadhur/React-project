import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navreusable from './components/Navreusable';
import Blog from './components/Blog';
import Challenges from './components/Challenges';
import Flex from './components/Flex';
import Grid from './components/Grid';
import Header from './components/Header';
import WebDevelopment from './components/WebDevelopment';
import Css from './components/Css';
import Javascript from './components/Javascript';

function App()
{
  return (

    <div className='container'>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Blog />}></Route>
          <Route exact path='/challenges' element={<Challenges />}></Route>
          <Route exact path='/flexbox' element={<Flex />}></Route>
          <Route exact path='/grid' element={<Grid />}></Route>
          <Route exact path='/web' element={<WebDevelopment />}></Route>
          <Route exact path='/css' element={<Css />}></Route>
          <Route exact path='/js' element={<Javascript />}></Route>
        </Routes>



      </Router>
    </div>
  );
}

export default App;
