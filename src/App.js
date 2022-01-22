import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Project from './pages/Project';
import Review from './pages/Review';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
function App() {
  return (
    // <div>
    //     <BrowserRouter>
    //         <Header/>
    //       <Switch>
    //         <Route exact path='/home' component={Home} />
    //         <Route exact path='/about' component={About} />
    //         <Route exact path='/' component={Home} />
          
    //       </Switch>
    //     </BrowserRouter>
    // </div>

    <div>
      <Header/>
      <Home/>
      <About/>
      <Service/>
      <Project/>
      <Review/>
      <Pricing/>
      <Contact/>
      <div className='footer' >
        <div className='credit'>create by <span>Bao Duong Dev</span> | thank for watching!</div>
      </div>
    </div>
  );
}

export default App;
