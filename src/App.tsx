import React from 'react';
import './App.css';
import BoxLists from './components/BoxList/BoxLists'
import Data from './data/Box'
import Navbar from './components/NavBar/Navbar'
import HomeCarousel from './components/Carousel/Carousel'
import CarouselData from './data/Carousel'
import PersonList from './components/PersonList/PersonList'
const App: React.FC = () => {
  return (
    <div className="App">
        <Navbar/>
        <HomeCarousel carousel={CarouselData}/>
        <BoxLists boxes={Data}/>
        <PersonList/>
    </div>
  );
}

export default App;
