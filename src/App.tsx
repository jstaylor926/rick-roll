import * as React from 'react';
import CardList from './components/CardList';
import './assets/scss/main.scss'

export default function App() {
  return(
    <div className="app">
      <h2>Rick and Morty</h2>
      <CardList />
    </div>
  )
}