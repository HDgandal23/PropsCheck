import './App.css';
import Player from './Player';
import players from './players';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">SENEGAL PLAYERS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
      </Container>
    </Navbar>
      <br/>
      <br/>
      <div className='containers'>
      {
        players.map(p => (
          
            <div>
              <Player nom={p.nom} equipe={p.equipe} url={p.url} nation={p.nationalite} age={p.age} num={p.num}></Player>
            </div>
        
        ))
      }
      </div>
    </div>
  );
}

export default App;
