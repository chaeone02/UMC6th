// App5.jsx
import React from 'react';// eslint-disable-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import PopularPage from './pages/PopularPage';
import NowPlayingPage from './pages/NowPlayingPage';
import TopRatedPage from './pages/TopRatedPage';
import UpComingPage from './pages/UpComingPage';
import NotFoundPage from './pages/NotFoundPage';


const App5 = () => {
  const appStyles = {
    backgroundColor: '#2a3668'
  };

  return (
    <Router>
      <div style={appStyles}>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/nowplaying" element={<NowPlayingPage />} />
          <Route path="/toprated" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpComingPage />} />
          <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App5;
