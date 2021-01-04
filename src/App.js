import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { IoMdCamera } from "react-icons/io";
import Gallery from './components/Gallery';
// import PageTitle from './components/PageTitle';

function App() {
  return (
    <div>
      <Navbar className="py-3" expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home" className="mx-3">
          Falling For You
        </Navbar.Brand>
        <Navbar.Text>
          Album
          <IoMdCamera
          color="#add8e6"
          size="1.5em"
          className="align-top mx-2" />
        </Navbar.Text>
      </Navbar>
      <Container fluid className="bg-gradient">
        <Gallery />
      </Container>
    </div>
  );
}

export default App;
