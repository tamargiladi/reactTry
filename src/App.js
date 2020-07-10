import React from 'react';
import logo from './logo.svg';
import './App.css';

import Footer from "./Footer";
import MainContent from "./MainContent";
import Header from "./Header";
import TodoItem from "./TodoItem";

function App() {
  return (
      <div>
          <Header />
          <MainContent />
          <Footer />
      </div>

  )
}

export default App;
