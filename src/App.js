import logo from './img/abi-logo.png';
import atos from './img/atos_logo_bottom-removebg-preview.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <header className="App-header">
      </header>
      <div className="direct-chat-messages"></div>
      <form class="ui form">
        <textarea placeholder="Digite aqui..." rows="10">

        </textarea>
        <button class="button" type="submit">Enviar</button>
      </form>
      <img src={atos} className="logo-atos" alt="logo atos" />
    </div>
  );
}

export default App;
