import React, { useState, useEffect } from 'react';

import api from './services/api';

import DevItem from './components/Devitem';
import DevForm from './components/DevForm';

import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [devs, setDevs] = useState([]) 

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs')
      if (!response) return 
      setDevs(response.data);
    }
    loadDevs();
  }, [])

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)        
    setDevs([...devs, response.data])
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
             <DevItem dev={dev} key={dev._id} /> 
          ))}           
        </ul>
      </main>
    </div>
  );
}

export default App;
