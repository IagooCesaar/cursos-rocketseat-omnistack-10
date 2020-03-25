import React, { useState } from 'react';

import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [username,  setUsername]  = useState('')
  const [techs,     setTechs]     = useState('')
  const [latitude,  setLatitude]  = useState('')
  const [longitude, setLongitude] = useState('')

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>

          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required value={username} onChange={setUsername}/>
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required value={techs}/>
          </div>

          <div className="input-group">

            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required value={latitude}/>
            </div>  

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required vaue={longitude}/>
            </div>

          </div>   

          <button type="submit">SALVAR</button> 
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img 
                src="https://avatars1.githubusercontent.com/u/12894025?s=460&u=ca7da8af56a69f2422f71908d92d67ecd59c926a&v=4" 
                alt="avatar" 
              />
              <div className="user-info">
                <strong>Iago César</strong>
                <span>React JS, React Native, Node.js</span>
              </div>
            </header>  
            <p>BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO </p>
            <a href="https://github.com/IagooCesaar">Acessar perfil no Github</a>
          </li>  
          <li className="dev-item">
            <header>
              <img 
                src="https://avatars1.githubusercontent.com/u/12894025?s=460&u=ca7da8af56a69f2422f71908d92d67ecd59c926a&v=4" 
                alt="avatar" 
              />
              <div className="user-info">
                <strong>Iago César</strong>
                <span>React JS, React Native, Node.js</span>
              </div>
            </header>  
            <p>BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO </p>
            <a href="https://github.com/IagooCesaar">Acessar perfil no Github</a>
          </li>  
          <li className="dev-item">
            <header>
              <img 
                src="https://avatars1.githubusercontent.com/u/12894025?s=460&u=ca7da8af56a69f2422f71908d92d67ecd59c926a&v=4" 
                alt="avatar" 
              />
              <div className="user-info">
                <strong>Iago César</strong>
                <span>React JS, React Native, Node.js</span>
              </div>
            </header>  
            <p>BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO </p>
            <a href="https://github.com/IagooCesaar">Acessar perfil no Github</a>
          </li>  
          <li className="dev-item">
            <header>
              <img 
                src="https://avatars1.githubusercontent.com/u/12894025?s=460&u=ca7da8af56a69f2422f71908d92d67ecd59c926a&v=4" 
                alt="avatar" 
              />
              <div className="user-info">
                <strong>Iago César</strong>
                <span>React JS, React Native, Node.js</span>
              </div>
            </header>  
            <p>BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO </p>
            <a href="https://github.com/IagooCesaar">Acessar perfil no Github</a>
          </li>  
        </ul>
      </main>
    </div>
  );
}

export default App;
