import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/sections/Sobre';
import Services from './components/sections/Services';
import Comparativo from './components/sections/Comparativo';
import Lazer from './components/sections/Lazer';
import Localizacao from './components/sections/Localizacao';
import Chale from './components/sections/Chale';
import Contact from './components/sections/Contact';
import Video from './components/sections/Video';
import Form from './components/sections/Form';
import Footer from './components/sections/Footer';

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
      <div className="bg-verde text-dourado py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
        {/* Rodapé */}
        <div className="flex-1">
          <Contact />
        </div>

        {/* Formulário */}
        <div className="flex-1">
          <Form />
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
}

export default App;