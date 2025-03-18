
import { useState } from 'react';
import './App.css';
import imgGaang from './img/gaang.png'
import Characters from './Components/Characters';

function App() {

  const [characters, setCharacters] = useState(null);
  const gaangApi = async () => {
    const api = await fetch("https://last-airbender-api.fly.dev/api/v1/characters/random?count=21");
    const characterApi = await api.json();
  
    setCharacters(characterApi);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Avatar: The Series</h1>
        
        {characters ? ( //Le decimos que si characters contiene algo nos cargue el componente de Characters y cuando no, nos cargue la página de inico
          <Characters characters ={characters}/>
        ) :(
          //Lo encapsulamos en un fragment para que no nos de error el JSX
          <>
          <img src={imgGaang} alt="gaang" className="img-home"></img>
        <button onClick={gaangApi} className="btn-search">Buscar personajes</button></>
        ) }
        
        
      </header>
    </div>
  );
}

export default App;
