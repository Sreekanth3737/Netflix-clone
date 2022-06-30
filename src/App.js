import React from 'react'
import './App.css';
import {action,comedy,documentries,hororr,originals, romance, trending} from './urls'
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action Movies' isSmall />
      <RowPost url={trending} title='Trending Movies'  />

      <RowPost url={hororr} title='Hororr Movies' isSmall />
      <RowPost url={comedy} title='Comedy Movies'  />
      <RowPost url={romance} title='Romantic Movies' isSmall />
      <RowPost url={documentries} title='Documentries'  />


      

    </div>
  );
}

export default App;
