import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/sections/Sobre';
import Services from './components/sections/Services';
import Comparativo from './components/sections/Comparativo';
import Lazer from './components/sections/Lazer';
import Localizacao from './components/sections/Localizacao';
import Form from './components/sections/Form';
import Chale from './components/sections/Chale';
import Contato from './components/sections/Contato';
import Footer from './components/sections/Footer';
import Video from './components/sections/Video';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Video />
      <Services />
      <Comparativo />
      <Chale />
      <Sobre />
      <Lazer />
      <Localizacao />
      <Form />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;