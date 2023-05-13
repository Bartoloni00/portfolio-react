import './App.css';
import { NavScrollExample } from './componentes/NavBar';
import {Header} from './componentes/Header'
import { Skills } from './componentes/Skills';
import { Projects } from './componentes/Projects';
import { Form } from './componentes/Form';
import {SobreMi} from './componentes/SobreMi'


function App() {
  return (
    <div className="App">
     <NavScrollExample />
     <Header />
     <Skills />
     <SobreMi />
     <Projects />
     <Form />
    </div>
  );
}

export default App;
