import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer'
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css';

function App()
{
  return (
    <div className="container">
      <Header />

      <Content />
      <Sidebar />

      <Footer />

    </div>
  );
}

export default App;
