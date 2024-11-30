import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Posts from './features/post/posts';
import Genre from './components/genre';

function App() {
  return (
    <div className="page-container">
      <h1>Let's Talk Books...</h1>
      <div className="content-container" >
        <Posts />
        <div className="genres-container">
          <h3>Genres</h3>
          <Genre />
        </div>
      </div>
    </div>
  );
}

export default App;
