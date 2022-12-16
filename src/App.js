import './App.scss';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AboutMe from './components/AboutMe/AboutMe';
import {themeContext} from './Context';
import { useContext } from 'react';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
    style={{
      background: darkMode? 'black' : '',
      color: darkMode? '#ffffffcf': ''
    }}>
      <Header/>
      <Intro/>
      <AboutMe/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
