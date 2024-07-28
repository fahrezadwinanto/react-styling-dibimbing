import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from './components/MainContent';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  const menuItems = [
    { name: 'Home', link: '../components/Home' },
    { name: 'About', link: '../components/About' },
    { name: 'Contact', link: '../components/Contact' },
  ];

  const [currentPage, SetCurrentPage] = useState('Home');

  const renderContent = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  }

  return (
    <div className="App">
      <Header title="Welcome to My Website" />
      <Navbar menuItems={menuItems} SetCurrentPage={SetCurrentPage}/>
      <MainContent content="This is the main content of the website." />
        {renderContent()}
      <Footer />
    </div>
  );
}

export default App;

